import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();


router.get('/note', getAllNotes);

router.get('/notes/:id', getNoteById);
router.post('/notes', createNote);

router.delete('/note/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
