export interface SafeItemApi {
  id: string;
  name: string;
  price: number;
  safeId: string;
  invoiceId: string;
  pictureIds: string[];
  approved: boolean;
  approverId: string;
}
