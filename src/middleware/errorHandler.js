import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
 
  if (error.isHttpError) {
    return res.status(error.status).json({
      message: error.message || error.name,
    });
  }
  console.error(error);
  res.status(500).json({
    message: error.message,
  });
};
