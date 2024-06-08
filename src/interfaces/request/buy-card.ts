export interface ICreateOrderReq {
  cardInfo?: { cardId: number; quantity: number }[];
  paymentMethodCode: string;
}
