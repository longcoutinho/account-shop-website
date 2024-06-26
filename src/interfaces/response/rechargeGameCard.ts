export interface IGamesRes {
  id: string;
  name: string;
  description: string;
  code: string;
  image: string;
  router: string;
}

export interface ICardsRes {
  id: number;
  name: string;
  image: string;
}

export interface IPaymentMethodRes {
  id: number;
  isActive: number;
  name: string;
  image: string;
  code: string;
}

export interface IItemCardRes {
  id: number;
  price: number;
  cardId: number;
  code: string;
}
