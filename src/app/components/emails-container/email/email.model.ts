export interface Email {
  from: string;
  to: string[];
  cc: any[];
  bcc: any[];
  subject: string;
  body: string;
  date: string;
}
