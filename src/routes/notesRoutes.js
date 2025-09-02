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
  createNoteSchema as wrongCreateSchema,
  getAllNotesSchema as wrongGetAllSchema,
  noteIdSchema as wrongNoteIdSchema,
  updateNoteSchema as wrongUpdateSchema,
} from '../validations/authValidation.js'; 
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/notes', celebrate(wrongGetAllSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(wrongNoteIdSchema), getNoteById);
router.post('/notes', celebrate(wrongCreateSchema), createNote);
router.patch('/notes/:noteId', celebrate(wrongUpdateSchema), updateNote);
router.delete('/notes/:noteId', celebrate(wrongNoteIdSchema), deleteNote);

export default router;
