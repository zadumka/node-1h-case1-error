import express from 'express';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(notesRoutes);
app.use(authRoutes);
app.use(userRoutes);

app.use(errors()); 
app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`); 
});
