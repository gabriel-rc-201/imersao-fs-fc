export interface IInvoice {
  id: string;
  account_id: string;
  amount: number;
  status: string;
  description: string;
  card_last_digits: string;
  created_at: Date;
  updated_at: Date;
}
