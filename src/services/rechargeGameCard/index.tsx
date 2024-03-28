import { Backend } from "@/constants";
import { doGetRequest, doPostRequest } from "@/constants/FnCommon";
import { ICreateOrderReq } from "@/interfaces/request/buy-card";

export const requestGetListGames = async (): Promise<any> => {
  const url = Backend.GAME_SERVICE;
  return doGetRequest(url, null);
};

export const requestGetListCards = async (): Promise<any> => {
  const url = Backend.CARD_SERVICE;
  return doGetRequest(url, null);
};

export const requestGetItemCard = async (id: string): Promise<any> => {
  const url = Backend.ITEM_SERVICE + `/card/${id}`;
  return doGetRequest(url, null);
};

export const requestCreateOrder = async (
  body: ICreateOrderReq
): Promise<any> => {
  const url = Backend.BASE_URL + "/sale-order/create";
  const request = body;
  return doPostRequest(url, request);
};
