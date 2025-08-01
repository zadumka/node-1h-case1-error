import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);

router.put('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);

router.post('/notes/:noteId', updateNote);

export default router;"
