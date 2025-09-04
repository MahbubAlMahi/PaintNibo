import mongoose from 'mongoose';

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri, { dbName: 'paint_db' });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
