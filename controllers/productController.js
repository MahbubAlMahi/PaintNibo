import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

export const getProducts = asyncHandler(async (req, res) => {
  const { search = '', category } = req.query;
  const query = {
    ...(category ? { category } : {}),
    ...(search ? { name: { $regex: search, $options: 'i' } } : {})
  };
  const products = await Product.find(query).sort({ createdAt: -1 });
  res.json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.json(product);
});

export const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.userId);
  if (alreadyReviewed) {
    res.status(400);
    throw new Error('Product already reviewed by you');
  }
  const review = {
    user: req.userId,
    name: req.userName || 'User',
    rating: Number(rating),
    comment
  };
  product.reviews.push(review);
  product.numReviews = product.reviews.length;
  product.rating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length;
  await product.save();
  res.status(201).json({ message: 'Review added' });
});
