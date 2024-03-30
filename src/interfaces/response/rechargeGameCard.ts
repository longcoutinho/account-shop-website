export interface IGamesRes {
  id: string;
  name: string;
  description: string;
  code: string;
  image: string;
}

export interface ICardsRes {
  id: number;
  name: string;
  image: string;
}

export interface IPaymentMethodRes {
  id: number;
  name: string;
  image: string;
}

export interface IItemCardRes {
  id: number;
  price: number;
  cardId: number;
  code: string;
}
