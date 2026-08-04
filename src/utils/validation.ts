import type { ContactFormPayload } from '../types/contact';

export function validateContactForm(data: any): { isValid: boolean; errors: string[]; payload?: ContactFormPayload } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
    errors.push('Full name is required.');
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim() === '') {
    errors.push('Phone number is required.');
  }

  if (!data.email || typeof data.email !== 'string' || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push('A valid email address is required.');
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    payload: {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      unitType: data.unitType?.toString().trim(),
      intent: data.intent?.toString().trim(),
      message: data.message?.toString().trim(),
      whatsappOptIn: data.whatsappOptIn === 'on' || data.whatsappOptIn === true,
    },
  };
}
