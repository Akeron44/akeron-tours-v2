import { Request, Response, NextFunction } from 'express';
import { ContactFormData } from '../types';

export const validateContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, message }: ContactFormData = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required',
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address',
    });
  }

  next();
};
