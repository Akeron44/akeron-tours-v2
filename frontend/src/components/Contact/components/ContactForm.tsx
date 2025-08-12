import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { t } = useLanguage();
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);

    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    const data = await response.json();
    console.log('Response:', data);

    toast({
      title: t('messageSent'),
      description: t('messageThankYou'),
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Card className="animate-fade-in border-0 shadow-xl bg-white">
      <CardContent className="p-8 w-full">
        <h3 className="font-playfair font-semibold text-2xl text-albanian-green mb-6">
          {t('sendUsAMessage')}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block font-inter font-medium text-albanian-forest mb-2"
            >
              {t('fullName')} *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="border-albanian-sage/50 focus:border-albanian-green"
              placeholder={t('yourFullName')}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-inter font-medium text-albanian-forest mb-2"
            >
              {t('emailAddress')} *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="border-albanian-sage/50 focus:border-albanian-green"
              placeholder={t('yourEmail')}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-inter font-medium text-albanian-forest mb-2"
            >
              {t('phoneNumber')}
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="border-albanian-sage/50 focus:border-albanian-green"
              placeholder={t('yourPhone')}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-inter font-medium text-albanian-forest mb-2"
            >
              {t('message')} *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="border-albanian-sage/50 focus:border-albanian-green min-h-[120px] resize-none"
              placeholder={t('messageIdeal')}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-albanian-green hover:bg-albanian-forest text-white py-3 text-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {t('sendMessage')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
