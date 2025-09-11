import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';

const router = Router();


router.post('/auth/register', registerUser, celebrate(registerUserSchema));
router.post('/auth/login', loginUser, celebrate(loginUserSchema));
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/request-reset-email', requestResetEmail, celebrate(requestResetEmailSchema));
router.post('/auth/reset-password', resetPassword, celebrate(resetPasswordSchema));


export { router };
