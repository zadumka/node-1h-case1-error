import { Joi, Segments } from 'celebrate';


export const registerUserSchema = {
  [Segments.BODY]: {
    email: Joi.string().email(),
    password: Joi.string().min(8),
  },
};

export const loginUserSchema = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};


export const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
  }),
};


const resetPasswordSchema = {
  [Segments.BODY]: {
    password: Joi.string().required(),
    token: Joi.string().required(),
  },
};

export default resetPasswordSchema;
