import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Product from '../models/Product.js';

export const getCart = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId).populate('cart.product', 'name image price');
  res.json(user.cart || []);
});

export const addToCart = asyncHandler(async (req, res) => {
  const { productId, qty } = req.body;
  const user = await User.findById(req.userId);
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  const existing = user.cart.find(c => c.product.toString() === productId);
  if (existing) {
    existing.qty += Number(qty || 1);
  } else {
    user.cart.push({ product: productId, qty: Number(qty || 1) });
  }
  await user.save();
  const populated = await user.populate('cart.product', 'name image price');
  res.json(populated.cart);
});

export const updateCartItem = asyncHandler(async (req, res) => {
  const { productId, qty } = req.body;
  const user = await User.findById(req.userId);
  const item = user.cart.find(c => c.product.toString() === productId);
  if (!item) {
    res.status(404);
    throw new Error('Item not in cart');
  }
  item.qty = Number(qty);
  await user.save();
  const populated = await user.populate('cart.product', 'name image price');
  res.json(populated.cart);
});

export const removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const user = await User.findById(req.userId);
  user.cart = user.cart.filter(c => c.product.toString() != productId);
  await user.save();
  const populated = await user.populate('cart.product', 'name image price');
  res.json(populated.cart);
});
