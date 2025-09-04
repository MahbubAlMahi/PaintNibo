import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Product from './models/Product.js';
import User from './models/User.js';
import Order from './models/Order.js';
import products from './data/products.js';

dotenv.config();
await connectDB(process.env.MONGO_URI);

try {
  await Order.deleteMany();
  await Product.deleteMany();
  // Keep users if you like; for clean slate, uncomment:
  // await User.deleteMany();

  await Product.insertMany(products);
  console.log('Data Imported');
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}
