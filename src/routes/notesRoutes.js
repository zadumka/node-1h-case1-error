import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', celebrate(createNoteSchema), getAllNotes); 
router.get('/notes/:noteId', celebrate(updateNoteSchema), getNoteById); 
router.post('/notes', celebrate(getAllNotesSchema), createNote); 
router.delete('/notes/:noteId', celebrate(createNoteSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(noteIdSchema), updateNote); 

export default router;
