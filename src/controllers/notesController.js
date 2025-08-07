import createHttpError from 'http-errors';
import { Note } from '../models/note'; 
export const getAllNotes = async (req, res) => {
  const { page = 1, perPage = 10, tag, search = '' } = req.query;
  const skip = (page - 1) * perPage;

  const notesQuery = Note.find();

  if (tag) {
    notesQuery.where('tag').equals(tag);
  }

  if (search) {
    notesQuery.or([
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
    ]);
  }

  const [totalNotes, notes] = await Promise.all([
    notesQuery.clone().countDocuments(),
    notesQuery.skip(skip).limit(perPage),
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
  const { noteId } = req.params;
  const note = await Note.findById(noteId);
  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json(newNote);
};

export const deleteNote = async (req, res, next) => {
  const note = await Note.findOneAndDelete({ _id: req.params.noteId });

  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }

  res.status(200).send(note);
};

export const updateNote = async (req, res, next) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.noteId },
    req.body,
    { new: true }
  );

  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }

  res.status(200).json(note);
};
