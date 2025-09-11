import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';
import { updateUserAvatar } from '../controllers/userController.js';

const router = Router();


router.patch(
  '/users/me/avatar',
  upload.single('avatar'),
  authenticate,
  updateUserAvatar,
);

export default router;
