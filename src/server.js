"import express from 'express';
import 'dotenv/config';
import cors from 'cors';
// ПОМИЛКА: Відсутній імпорт pino-http

const app = express();
// ПОМИЛКА: Неправильне встановлення порту
const PORT = process.env.PORT || 8080; // має бути 3030 за замовчуванням

// Middleware
// ПОМИЛКА: Відсутній express.json() middleware
app.use(cors());
// ПОМИЛКА: Відсутній pino-http middleware

// ПОМИЛКА: Неправильні маршрути
app.get('/note', (req, res) => { // має бути /notes
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

app.get('/note/:id', (req, res) => { // має бути /notes/:noteId
  const { id } = req.params; // має бути noteId
  res.status(200).json({
    message: `Retrieved note with ID: ${id}`,
  });
});

// ПОМИЛКА: Відсутній маршрут /test-error

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
});"
