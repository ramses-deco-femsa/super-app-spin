export type Movement = {
  id: number;
  entity: string;
  date: string;
  points: number;
  operation: 'earned' | 'expended';
  transactionNo: string;
  expiryDate?: string;
  giftCode?: string;
};

export type MovementsFormatted = {
  title: string;
  data: Movement[];
};
