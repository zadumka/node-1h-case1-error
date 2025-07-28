import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 8080; 

app.use(cors());

app.get('/note', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

app.get('/note/:id', (req, res) => { 
  const { id } = req.params; // 
  res.status(200).json({
    message: `Retrieved note with ID: ${id}`,
  });
});


// Custom middleware
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
