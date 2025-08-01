
export const notFound = () => {
  
  res.status(404).json({
    message: 'Route not found',
  });
};
