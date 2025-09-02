import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use(authenticate);

router.post('/notes', celebrate(getAllNotesSchema), getAllNotes); 
router.post('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.post('/notes/:noteId', celebrate(updateNoteSchema), updateNote); 
export default router;
