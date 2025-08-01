
export default (req, res) => {
 
  res.status(500).json({
    message: 'Route not found',
  });
};
