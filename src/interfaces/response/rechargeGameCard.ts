export interface IGamesRes {
  id: string;
  name: string;
  description: string;
  code: string;
}

export interface ICardsRes {
  id: number;
  name: string;
}

export interface IItemCardRes {
  id: number;
  price: number;
  cardId: number;
  code: string;
}
