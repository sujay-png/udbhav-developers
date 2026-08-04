export interface ContactFormPayload {
  name: string;
  phone: string;
  email: string;
  unitType?: string;
  intent?: string;
  message?: string;
  whatsappOptIn?: boolean;
}
