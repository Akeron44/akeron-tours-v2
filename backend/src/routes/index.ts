import express from 'express';
import contactRoutes from './contact';

const router = express.Router();

router.use('/contact', contactRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({ message: 'API is running!' });
});

export default router;
