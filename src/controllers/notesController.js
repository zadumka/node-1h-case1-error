import createHttpError from 'http-errors';
import { Note } from '../models/note.js';

export const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};


export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);
  if (!note) {
    
    return res.status(404).json({ message: 'Note not found' });
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json(newNote);
};


export const deleteNote = async (req, res) => {
  const note = await Note.findOneAndDelete({
    _id: req.params.noteId,
  });
  if (!note) {
    
    return res.status(404).json({ error: 'Note not found' });
  }
  res.status(200).send(note);
};


export const updateNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.noteId },
    req.body,
    { new: true },
  );
  if (!note) {
    
    throw new Error('Note not found');
  }
  res.status(200).json(note);
};
