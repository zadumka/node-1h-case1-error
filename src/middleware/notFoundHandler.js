export const notFoundHandler = (req, res) => {
  res.status(404).json({
    
    error: 'Route not found',
   
    status: 404,
  });
};
