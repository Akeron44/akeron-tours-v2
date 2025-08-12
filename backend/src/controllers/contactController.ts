import { Request, Response } from 'express';
import { ContactFormData, ApiResponse } from '../types';

export const submitContactForm = (req: Request, res: Response) => {
  const { name, email, phone, message }: ContactFormData = req.body;

  // Log the contact form data
  console.log('📧 New contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone || 'Not provided');
  console.log('Message:', message);
  console.log('Timestamp:', new Date().toISOString());
  console.log('---');

  // Send success response
  const response: ApiResponse = {
    success: true,
    message: 'Message received successfully!',
  };

  res.status(200).json(response);
};
