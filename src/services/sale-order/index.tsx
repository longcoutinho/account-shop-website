import { Backend } from "@/constants";
import { doFileRequest, doGetRequest } from "@/constants/FnCommon";
import { Order } from "@/interfaces/request";

export const createOrder = async (request: Order): Promise<any> => {
  const url = Backend.SALE_ORDER_SERVICE + "/create";
  return doFileRequest(url, request);
};

export const getAllSaleOrders = async (): Promise<any> => {
  const url = Backend.SALE_ORDER_SERVICE + "/list";
  return doGetRequest(url, null);
};
