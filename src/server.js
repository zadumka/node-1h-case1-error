import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(express.json());
app.use(cors());

app.use(notesRoutes);
app.use(logger); 

app.use(errorHandler);
app.use(notFoundHandler); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
await connectMongoDB();
