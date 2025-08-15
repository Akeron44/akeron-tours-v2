import { Request, Response, NextFunction } from 'express';
import { ContactFormData, TourInquiryFormData } from '../types';

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

export const validateTourInquiry = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    tourId,
    tourName,
    name,
    email,
    numberOfPeople,
    inquiryType,
    language,
    preferredDate,
  }: TourInquiryFormData = req.body;

  // Required field validation
  if (
    !tourId ||
    !tourName ||
    !name ||
    !email ||
    !numberOfPeople ||
    !inquiryType ||
    !language
  ) {
    return res.status(400).json({
      success: false,
      message:
        'Required fields: tourId, tourName, name, email, numberOfPeople, inquiryType, language',
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

  // Validate number of people
  if (numberOfPeople < 1 || numberOfPeople > 50) {
    return res.status(400).json({
      success: false,
      message: 'Number of people must be between 1 and 50',
    });
  }

  // Validate inquiry type
  const validInquiryTypes = ['booking', 'custom', 'info'];
  if (!validInquiryTypes.includes(inquiryType)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid inquiry type. Must be: booking, custom, or info',
    });
  }

  // Validate preferred date if provided
  if (preferredDate) {
    const date = new Date(preferredDate);
    if (isNaN(date.getTime())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid preferred date format',
      });
    }

    // Check if date is in the future
    if (date < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Preferred date must be in the future',
      });
    }
  }

  next();
};
