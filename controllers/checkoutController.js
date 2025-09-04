import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

export const checkout = asyncHandler(async (req, res) => {
  const { paymentNumber } = req.body;
  if (!/^\d{8,16}$/.test(paymentNumber || '')) {
    res.status(400);
    throw new Error('Payment number should be 8-16 digits');
  }
  const user = await User.findById(req.userId).populate('cart.product');
  if (!user || !user.cart.length) {
    res.status(400);
    throw new Error('Cart is empty');
  }
  // Calculate total
  let total = 0;
  const items = user.cart.map(ci => {
    total += ci.product.price * ci.qty;
    return {
      product: ci.product._id,
      name: ci.product.name,
      image: ci.product.image,
      price: ci.product.price,
      qty: ci.qty
    };
  });

  const masked = paymentNumber.replace(/\d(?=\d{4})/g, '*');
  const order = await Order.create({
    user: user._id,
    items,
    total,
    paymentNumberMasked: masked,
  });

  // Clear cart
  user.cart = [];
  await user.save();

  res.status(201).json({ message: 'Payment successful', orderId: order._id, total });
});

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(orders);
});
