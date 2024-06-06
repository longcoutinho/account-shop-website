export interface ICreateOrderReq {
  cardInfo?: { cardItemId: number; quantity: number }[];
  paymentMethodCode: string;
}
