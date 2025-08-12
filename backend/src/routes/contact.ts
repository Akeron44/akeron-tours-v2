import express from 'express';
import { submitContactForm } from '../controllers/contactController';
import { validateContactForm } from '../middleware/validation';

const router = express.Router();

router.post('/', validateContactForm, submitContactForm);

export default router;
