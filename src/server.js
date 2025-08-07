import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(notesRoutes);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
