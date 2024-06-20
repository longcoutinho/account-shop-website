import { Backend } from "@/constants";
import { doGetRequest } from "@/constants/FnCommon";

export const getListCategory = async (): Promise<any> => {
  const url = Backend.BASE_URL + "/product-type";

  return doGetRequest(url, null);
};

export const getListProduct = async (): Promise<any> => {
  const url = Backend.BASE_URL + "/product";

  return doGetRequest(url, null);
};

export const requestGetDetailProduct = async (
  productId: string | number
): Promise<any> => {
  const url = Backend.BASE_URL + `/product/${productId} `;

  return doGetRequest(url, null);
};
