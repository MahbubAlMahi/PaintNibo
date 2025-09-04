import express from 'express';
import { protect } from '../middleware/auth.js';
import { checkout, getOrders } from '../controllers/checkoutController.js';

const router = express.Router();
router.post('/', protect, checkout);
router.get('/orders', protect, getOrders);

export default router;
