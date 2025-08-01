import createHttpError from 'http-errors';
import { Note } from '../models/note.js';

export const getAllNotes = async (req, res) => {
 
  const notes = await Note.findAll();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  
  const note = await Note.findOne(noteId);
  if (!note) {
    return next(createHttpError(404, 'Note not found'));
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  
  const newNote = new Note(req.body);
  await newNote.save();
  res.status(201).json(newNote);
};

export const deleteNote = async (req, res, next) => {
  
  const result = await Note.deleteOne({
    _id: req.params.noteId,
  });
  if (result.deletedCount === 0) {
    return next(createHttpError(404, 'Note not found'));
  }
  
  res.status(200).send(result);
};

export const updateNote = async (req, res, next) => {
  
  const result = await Note.updateOne(
    { _id: req.params.noteId },
    req.body,
  );
  if (result.matchedCount === 0) {
    return next(createHttpError(404, 'Note not found'));
  }
  
  res.status(200).json(result);
};
