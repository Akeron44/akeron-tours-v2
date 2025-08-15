import express from 'express';
import contactRoutes from './contact';
import tourInquiryRoutes from './tourInquiry';

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/tour-inquiry', tourInquiryRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({ message: 'API is running!' });
});

export default router;
