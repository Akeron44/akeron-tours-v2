import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ApiCalls } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourId: number;
  tourName: string;
  tourPrice: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  preferredDate: string;
  message: string;
  inquiryType: 'BOOKING' | 'CUSTOM' | 'INFO';
}

export default function TourContactModal({
  isOpen,
  onClose,
  tourId,
  tourName,
  tourPrice,
}: BookingModalProps) {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    preferredDate: '',
    message: '',
    inquiryType: 'BOOKING',
  });

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const api = new ApiCalls();
      await api.saveTourInquiry({
        tourId,
        tourName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message || undefined,
        preferredDate: formData.preferredDate || undefined,
        numberOfPeople: formData.numberOfPeople,
        inquiryType: formData.inquiryType,
        language,
      });

      toast({
        title: t('success'),
        description: t('tourInquirySuccess'),
        variant: 'default',
      });

      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        numberOfPeople: 1,
        preferredDate: '',
        message: '',
        inquiryType: 'BOOKING',
      });
      onClose();
    } catch (error) {
      toast({
        title: t('error'),
        description: t('tourInquiryError'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-albanian-green">
            {t('bookTour')}
          </DialogTitle>
          <DialogDescription className="text-albanian-forest">
            <div className="font-semibold text-lg text-albanian-green mb-1">
              {tourName}
            </div>
            <div className="text-sm">
              {t('price')}: <span className="font-semibold">{tourPrice}</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-albanian-green flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {t('contactInformation')}
            </h3>

            <div className="space-y-2">
              <Label htmlFor="name">{t('fullName')} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="border-albanian-green/30 focus:border-albanian-green"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('email')} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-albanian-green/30 focus:border-albanian-green"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t('phone')}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-albanian-green/30 focus:border-albanian-green"
              />
            </div>
          </div>

          {/* Tour Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-albanian-green flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {t('tourDetails')}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numberOfPeople">{t('numberOfPeople')} *</Label>
                <Select
                  value={formData.numberOfPeople.toString()}
                  onValueChange={(value) =>
                    handleInputChange('numberOfPeople', parseInt(value))
                  }
                >
                  <SelectTrigger className="border-albanian-green/30 focus:border-albanian-green">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {num} {num === 1 ? t('person') : t('people')}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredDate">{t('preferredDate')}</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  min={minDate}
                  value={formData.preferredDate}
                  onChange={(e) =>
                    handleInputChange('preferredDate', e.target.value)
                  }
                  className="border-albanian-green/30 focus:border-albanian-green"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiryType">{t('inquiryType')} *</Label>
              <Select
                value={formData.inquiryType}
                onValueChange={(value: 'booking' | 'custom' | 'info') =>
                  handleInputChange('inquiryType', value)
                }
              >
                <SelectTrigger className="border-albanian-green/30 focus:border-albanian-green">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="booking">
                    {t('booking')} - {t('bookingDescription')}
                  </SelectItem>
                  <SelectItem value="custom">
                    {t('custom')} - {t('customDescription')}
                  </SelectItem>
                  <SelectItem value="info">
                    {t('info')} - {t('infoDescription')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-albanian-green flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              {t('additionalInformation')}
            </h3>

            <div className="space-y-2">
              <Label htmlFor="message">{t('message')}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={t('messagePlaceholder')}
                className="border-albanian-green/30 focus:border-albanian-green"
                rows={3}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-albanian-green text-albanian-green hover:bg-albanian-green hover:text-white"
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-albanian-green hover:bg-albanian-forest text-white"
            >
              {isSubmitting ? t('submitting') : t('submitInquiry')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
