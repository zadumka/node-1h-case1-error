import { Joi, Segments } from 'celebrate';

export const registerUserSchema = {
  [Segments.QUERY]: { 
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  },
};

export const loginUserSchema = {
  [Segments.QUERY]: { 
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};
