import { Request, Response } from 'express';
import { TourInquiryFormData, ApiResponse } from '../types';
import { PrismaClient } from '@prisma/client';
import { EmailService } from '../services/emailService';

const prisma = new PrismaClient();
const emailService = new EmailService();

export const submitTourInquiry = async (req: Request, res: Response) => {
  const {
    tourId,
    tourName,
    name,
    email,
    phone,
    message,
    preferredDate,
    numberOfPeople,
    inquiryType,
    language,
  }: TourInquiryFormData = req.body;

  // Validation
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

  try {
    const tourInquiry = await prisma.tourInquiry.create({
      data: {
        tourId,
        tourName,
        name,
        email,
        phone,
        message,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        numberOfPeople,
        inquiryType,
        language,
      },
    });

    // Log the tour inquiry
    console.log(
      `🎯 New tour inquiry for "${tourName}" from ${name} (${email})`
    );
    console.log(
      `   Tour ID: ${tourId} | People: ${numberOfPeople} | Type: ${inquiryType}`
    );
    if (preferredDate) {
      console.log(`   Preferred Date: ${preferredDate}`);
    }
    console.log('---');

    // Send emails
    try {
      // Send confirmation email to user
      await emailService.sendTourInquiryConfirmation({
        tourId,
        tourName,
        name,
        email,
        phone,
        message,
        preferredDate,
        numberOfPeople,
        inquiryType,
        language,
      });

      // Send notification email to admin
      await emailService.sendTourInquiryAdminNotification({
        tourId,
        tourName,
        name,
        email,
        phone,
        message,
        preferredDate,
        numberOfPeople,
        inquiryType,
        language,
      });

      console.log(
        `📧 Emails sent for tour inquiry "${tourName}" from ${name} (${email})`
      );
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Continue execution even if emails fail
    }

    // Send success response
    const response: ApiResponse = {
      success: true,
      message: 'Tour inquiry received successfully!',
      data: tourInquiry,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error creating tour inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save tour inquiry',
    });
  }
};
