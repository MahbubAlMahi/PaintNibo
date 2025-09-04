import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const genToken = (user) => {
  return jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }
  const exists = await User.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashed, cart: [] });
  const token = genToken(user);
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'Lax',
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.json({ id: user._id, name: user.name, email: user.email });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = genToken(user);
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.json({ id: user._id, name: user.name, email: user.email });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

export const me = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId).populate('cart.product', 'name image price');
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json({ id: user._id, name: user.name, email: user.email, cart: user.cart });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});
