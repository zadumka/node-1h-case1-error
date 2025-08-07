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


router.post('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.put('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.get('/notes', celebrate(createNoteSchema), createNote);
router.patch('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.get('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
