import createHttpError from 'http-errors';
import { Note } from '../models/note.js';

export const createNote = async (req, res) => {
  const newNote = await Note.create({
    ...req.body,
    userId: null, 
  });
  res.status(200).json(newNote); 
};

export const updateNote = async (req, res, next) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.noteId }, 
    req.body,
    { new: false } 
  );

  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }

  res.status(200).json(note);
};

export const deleteNote = async (req, res, next) => {
  const note = await Note.findOneAndDelete({ _id: req.params.noteId }); 

  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }

  res.status(204).send(); 
};
