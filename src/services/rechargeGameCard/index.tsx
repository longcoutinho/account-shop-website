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

export const requestGetListPaymentMethod = async (): Promise<any> => {
  const url = Backend.BASE_URL + "/payment/method";
  return doGetRequest(url, null);
};

export const requestGetSendOTP = async (id: string): Promise<any> => {
  const url = Backend.BASE_URL + `/top-up-game/lord-mobile/send-otp/${id}`;
  return doGetRequest(url, null);
};

export const requestGetToken = async (
  id: string,
  otp: string
): Promise<any> => {
  const url = Backend.BASE_URL + `/top-up-game/lord-mobile/token/${id}`;
  const request = { otp: otp };
  return doPostRequest(url, request);
};

export const requestGetListTier = async (): Promise<any> => {
  const url = Backend.BASE_URL + "/top-up-item/1";
  return doGetRequest(url, null);
};

export const requestGetUserFromId = async (username: string): Promise<any> => {
  const url = Backend.BASE_URL + `/lord-mobile/search/${username}`;
  return doGetRequest(url, null);
};
