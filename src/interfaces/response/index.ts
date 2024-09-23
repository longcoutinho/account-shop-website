export interface ITest {
  test: string;
}
export interface Post {
  titleImageUrlStream: string;
  title: string;
  author: string;
  typeId: string;
  content: string;
  id: string;
  createAt: string;
  introduction: string;
}
export interface Item {
  id: number;
  price: number;
  name: string;
  lv1Id: number;
  lv2Id: number | null;
  listImageIds: number[];
  amount: number;
  introduction?: string;
  title?: string;
  titleImageUrlStream?: string;
}

export interface TopUpRequest {
  id: number;
  createDate: string;
  status: number;
  amount: number;
  username: string;
  password: string;
  method: number;
}

export interface IOrderHistory {
  id: string;
  createUser: string;
  createDate: string;
  price: number;
  status: string;
  currency: string;
}

export interface IProductOrderHistory {
  id: string;
  createUser: string;
  createDate: string;
  price: number;
  status: number;
  currency: string;
}

export interface Course {
  title: string;
  teacher: string;
  titleImageUrlStream: string;
  videoTime: number;
}

export interface TypePost {
  id: string;
  name: string;
}

export interface Comment {
  email: string;
  name: string;
  content: string;
}

export interface Service {
  title: string;
  content: string;
  titleImageUrlStream: string;
  id: string;
}

export interface ItemToCart {
  titleImageUrlStream: string;
  id: string;
  title: string;
  price: number;
  amount: number;
  totalPrice: number;
  itemId: string;
}
