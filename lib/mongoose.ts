import mongoose from 'mongoose';
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGO_URI) return console.log('MISSING MONGO_URI');

  if (isConnected) return console.log('MongoDB is already connected');

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'devflow',
    })
    isConnected = true;
    console.log('MongoDB is connected');
  } catch (error) {
    console.log('MongoDB connection failed', error);
  }
}