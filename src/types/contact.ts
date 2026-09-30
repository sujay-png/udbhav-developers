export interface ContactFormPayload {
  name: string;
  phone: string;
  email: string;
  city?: string;
  unitType?: string;
  intent?: string;
  message?: string;
  whatsappOptIn?: boolean;
  source?: string;
}
