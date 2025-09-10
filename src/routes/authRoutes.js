import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController'; 
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation'; 

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);

router.post('/auth/logout', celebrate(loginUserSchema), logoutUser);

router.post('/auth/refresh', celebrate(registerUserSchema), refreshUserSession);

router.post('/auth/request-reset-email', requestResetEmail); 
router.post('/auth/reset-password', celebrate(resetPasswordSchema), resetPassword);

export default router;
