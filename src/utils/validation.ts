import type { ContactFormPayload } from '../types/contact';

export function validateName(name: unknown): string | null {
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return 'Please enter your name (minimum 2 characters).';
  }
  return null;
}

export function validateEmail(email: unknown): string | null {
  if (!email || typeof email !== 'string') {
    return 'Email address is required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.';
  }
  return null;
}

export function validatePhone(phone: unknown): string | null {
  if (!phone || typeof phone !== 'string') {
    return 'Phone number is required.';
  }
  const cleanPhone = phone.trim().replace(/[\s\-]/g, '');
  // Indian 10-digit mobile, optional +91, 91, or 0 prefix
  const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return 'Please enter a valid 10-digit Indian mobile number.';
  }
  return null;
}

export function validateCity(city: unknown): string | null {
  if (!city || typeof city !== 'string' || city.trim().length === 0) {
    return 'Please enter your current city.';
  }
  return null;
}

export function validateMessage(message: unknown): string | null {
  if (message && typeof message === 'string' && message.length > 500) {
    return 'Message must not exceed 500 characters.';
  }
  return null;
}

export function validateField(field: string, value: unknown): string | null {
  switch (field) {
    case 'name':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'phone':
      return validatePhone(value);
    case 'city':
      return validateCity(value);
    case 'message':
      return validateMessage(value);
    default:
      return null;
  }
}

export function validateContactForm(data: any): { isValid: boolean; errors: string[]; payload?: ContactFormPayload } {
  const errors: string[] = [];

  const nameError = validateName(data.name);
  if (nameError) errors.push(nameError);

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.push(phoneError);

  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);

  if (data.city !== undefined) {
    const cityError = validateCity(data.city);
    if (cityError) errors.push(cityError);
  }

  const messageError = validateMessage(data.message);
  if (messageError) errors.push(messageError);

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
      city: data.city ? data.city.toString().trim() : undefined,
      unitType: data.unitType?.toString().trim(),
      intent: data.intent?.toString().trim(),
      message: data.message?.toString().trim(),
      whatsappOptIn: data.whatsappOptIn === 'on' || data.whatsappOptIn === true,
      source: data.source ? data.source.toString().trim() : undefined,
    },
  };
}

