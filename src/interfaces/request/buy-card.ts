export interface ICreateOrderReq {
  cardInfo?: { cardId: number; quantity: number }[];
  paymentMethodCode: string;
  orderId: string | null;
}
