import mongoose from 'mongoose';


export const connectMongoDB = () => {
  const mongoUrl = process.env.MONGO_URL;
  
  mongoose.connect(mongoUrl, (error) => {
    if (error) {
      console.error('❌ Failed to connect to MongoDB:', error.message);
      process.exit(1);
    } else {
      console.log('✅ MongoDB connection established successfully');
    }
  });
};
