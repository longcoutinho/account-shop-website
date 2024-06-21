export interface ICategoryRes {
  id: number;
  name: string;
  create_date?: string;
  create_user?: string;
}
export interface IProductRes {
  name: string;
  id: number;
  typeId: number;
  imagePath: string;
}
export interface IPaymentMethodRes {
  id: number;
  isActive: number;
  name: string;
  image: string;
  code: string;
}
export interface IProductDetailRes {
  name: string;
  description: string;
  typeId: number;
  imagePathList: string[];
  categoryList: {
    id: number;
    productId: number;
    name: string;
  }[];
  feeList: {
    id: number;
    productId: number;
    price: number;
    paymentCode: string;
  }[];
}
