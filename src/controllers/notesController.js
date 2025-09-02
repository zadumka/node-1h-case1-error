import createHttpError from 'http-errors';
import { Note } from '../models/note.js';

export const getAllNotes = async (req, res) => {
  const { page = 1, perPage = 10, tag, search = '' } = req.query;

  const notesQuery = Note.find({ userId: req.user._id });

  if (tag) {
    notesQuery.where('tag').regex(tag); 
  }

  if (search) {
    notesQuery.or([
      { title: { $regex: search } }, 
      { content: { $regex: search } },
    ]);
  }

  const [totalNotes, notes] = await Promise.all([
    notesQuery.clone().countDocuments(),
    notesQuery.limit(perPage), 
  ]);
  const totalPages = Math.ceil(totalNotes / perPage);

  res.status(200).json({
    page,
    perPage,
    totalNotes,
    totalPages,
    notes,
  });
};

export const getNoteById = async (req, res, next) => {
  const note = await Note.findOne({ _id: req.params.noteId }); 

  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }

  res.status(200).json(note);
};
