import nodemailer from 'nodemailer';
import { ContactFormData, TourInquiryFormData } from '../types';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export class EmailService {
  private transporter: nodemailer.Transporter;
  private adminEmail: string = 'oniakeron@gmail.com';

  constructor() {
    // Configure email transporter
    // You'll need to set up environment variables for email configuration
    const emailConfig: EmailConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '', // Use app password for Gmail
      },
    };

    this.transporter = nodemailer.createTransport(emailConfig);
  }

  // Send confirmation email to user
  async sendUserConfirmation(data: ContactFormData): Promise<void> {
    const mailOptions = {
      from: `"Akeron Tours" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Thank you for contacting us - Akeron Tours',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">Thank you for your message!</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for showing interest in Akeron Tours. We have received your message and will get back to you shortly.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="font-style: italic;">"${data.message}"</p>
          </div>
          
          <p>We typically respond within 24 hours. In the meantime, feel free to explore our tours and experiences on our website.</p>
          
          <p>Best regards,<br>
          Akeron Tours</p>
          
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  // Send confirmation email for tour inquiries
  async sendTourInquiryConfirmation(data: TourInquiryFormData): Promise<void> {
    const mailOptions = {
      from: `"Akeron Tours" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Tour Inquiry Confirmation - ${data.tourName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">Thank you for your tour inquiry!</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for your interest in our "${
            data.tourName
          }" tour. We have received your inquiry and will get back to you shortly with detailed information.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin-top: 0;">Your Inquiry Details:</h3>
            <p><strong>Tour:</strong> ${data.tourName}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            <p><strong>Number of People:</strong> ${data.numberOfPeople}</p>
            <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
            ${
              data.preferredDate
                ? `<p><strong>Preferred Date:</strong> ${new Date(
                    data.preferredDate
                  ).toLocaleDateString()}</p>`
                : ''
            }
            ${
              data.message
                ? `<p><strong>Additional Message:</strong></p><p style="font-style: italic;">"${data.message}"</p>`
                : ''
            }
          </div>
          
          <p>Our team will review your request and contact you within 24 hours to discuss the details and availability.</p>
          
          <p>Best regards,<br>
          The Akeron Tours Team</p>
          
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  // Send notification email to admin
  async sendAdminNotification(data: ContactFormData): Promise<void> {
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: this.adminEmail,
      subject: `New Contact Form Submission - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">New Contact Form Submission</h2>
          <p>You have received a new message through your website contact form.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${
        data.email
      }</a></p>
            ${
              data.phone
                ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>`
                : ''
            }
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #2d5016; margin: 20px 0;">
            <h4 style="margin-top: 0;">Message:</h4>
            <p>${data.message}</p>
          </div>
          
          <p>Please respond to this inquiry promptly to maintain excellent customer service.</p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  // Send admin notification for tour inquiries
  async sendTourInquiryAdminNotification(
    data: TourInquiryFormData
  ): Promise<void> {
    const mailOptions = {
      from: `"Website Tour Inquiry" <${process.env.SMTP_USER}>`,
      to: this.adminEmail,
      subject: `New Tour Inquiry - ${data.tourName} (${data.inquiryType})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">New Tour Inquiry</h2>
          <p>You have received a new tour inquiry through your website.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin-top: 0;">Tour Details:</h3>
            <p><strong>Tour:</strong> ${data.tourName} (ID: ${data.tourId})</p>
            <p><strong>Inquiry Type:</strong> <span style="background-color: #2d5016; color: white; padding: 2px 8px; border-radius: 3px; font-size: 12px;">${
              data.inquiryType
            }</span></p>
            <p><strong>Number of People:</strong> ${data.numberOfPeople}</p>
            ${
              data.preferredDate
                ? `<p><strong>Preferred Date:</strong> ${new Date(
                    data.preferredDate
                  ).toLocaleDateString()}</p>`
                : ''
            }
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2d5016; margin-top: 0;">Customer Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${
        data.email
      }</a></p>
            ${
              data.phone
                ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>`
                : ''
            }
            <p><strong>Language:</strong> ${data.language}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          ${
            data.message
              ? `
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #2d5016; margin: 20px 0;">
            <h4 style="margin-top: 0;">Additional Message:</h4>
            <p>${data.message}</p>
          </div>
          `
              : ''
          }
          
          <p>Please respond to this inquiry promptly to secure the booking and maintain excellent customer service.</p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
