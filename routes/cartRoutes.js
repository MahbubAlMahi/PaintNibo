import express from 'express';
import { protect } from '../middleware/auth.js';
import { getCart, addToCart, updateCartItem, removeFromCart } from '../controllers/cartController.js';

const router = express.Router();
router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.put('/', protect, updateCartItem);
router.delete('/:productId', protect, removeFromCart);

export default router;
