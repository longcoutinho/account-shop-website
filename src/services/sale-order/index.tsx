import { Backend } from "@/constants";
import { doFileRequest, doGetRequest } from "@/constants/FnCommon";
import { Order } from "@/interfaces/request";

export const createOrder = async (request: Order): Promise<any> => {
  const url = Backend.SALE_ORDER_SERVICE + "/create";
  return doFileRequest(url, request);
};

export const getAllSaleOrders = async (
  page: number,
  pageSize: number
): Promise<any> => {
  const url = Backend.CARD_SERVICE + `/order?page=${page}&pageSize=${pageSize}`;
  return doGetRequest(url, null);
};

export const requestGetListProductOrders = async (
  page: number,
  pageSize: number,
  transId?: string
): Promise<any> => {
  const url =
    Backend.BASE_URL +
    `/product/order?page=${page}&pageSize=${pageSize}${
      transId && transId !== "" ? `&transId=${transId}` : ""
    }`;
  return doGetRequest(url, null);
};
