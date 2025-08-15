export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface TourInquiryFormData {
  tourId: number;
  tourName: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  preferredDate?: string; // ISO date string
  numberOfPeople: number;
  inquiryType: 'BOOKING' | 'CUSTOM' | 'INFO';
  language: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}
