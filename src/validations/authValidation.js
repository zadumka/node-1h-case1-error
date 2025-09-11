import { Joi, Segments } from 'celebrate';

export const registerUserSchema = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    
    password: Joi.string().min(6).required(),
  },
};

export const loginUserSchema = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    
    password: Joi.string(),
  },
};

export const requestResetEmailSchema = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
};


export const resetPasswordSchema = {
  [Segments.BODY]: {
    password: Joi.string().required(),
    token: Joi.string(),
  },
};
