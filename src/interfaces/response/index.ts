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
  status: string | number;
  amount: number;
  username: string;
  password: string;
  method: number;
}

export interface IBalanceHistory {
  id: number;
  userId: string;
  username: string;
  balanceAfter: number;
  balanceBefore: number;
  createDate: string;
  actType: number;
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
  status: string;
  currency: string;
  productName: string;
  categoriesName: string;
  address: string;
  phoneNumber: string;
  email: string;
  imageList: string[];
}

export interface IProductOrderHistoryRes {
  count: number;
  listData: IProductOrderHistory[];
  totalRevenue: number;
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
