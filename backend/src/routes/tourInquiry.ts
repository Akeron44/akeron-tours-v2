import express from 'express';
import { submitTourInquiry } from '../controllers/tourInquiryController';
import { validateTourInquiry } from '../middleware/validation';

const router = express.Router();

router.post('/', validateTourInquiry, submitTourInquiry);

export default router;
