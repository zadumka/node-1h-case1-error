import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      
      error: error.message || error.name,
     
      status: error.status,
    });
  }
  console.error(error);
  res.status(500).json({
    
    error: {
      message: error.message,
      stack: error.stack,
    },
  });
};
