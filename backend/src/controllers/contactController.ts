import { Request, Response } from 'express';
import { ContactFormData, ApiResponse } from '../types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const submitContactForm = async (req: Request, res: Response) => {
  const { name, email, phone, message }: ContactFormData = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required',
    });
  }

  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      message,
    },
  });
  // Log the contact form data
  console.log(`📧 New contact form submission from ${name} (${email})`);
  console.log('---');

  // Send success response
  const response: ApiResponse = {
    success: true,
    message: 'Message received successfully!',
    data: contact,
  };

  res.status(200).json(response);
};
