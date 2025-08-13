import { API_URL } from './constants';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export class ApiCalls {
  private baseUrl: string = API_URL;

  async saveContact(data: ContactFormData) {
    const response = await fetch(`${this.baseUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save contact');
    }

    return response.json();
  }
}
