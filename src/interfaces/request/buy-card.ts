export interface ICreateOrderReq {
  orderList?: { itemId: number; amount: number }[];
  method: number;
  price: number;
}
