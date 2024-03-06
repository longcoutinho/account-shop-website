import { Backend } from "@/constants";
import { doGetRequest, doPostRequest, getUserInfo } from "@/constants/FnCommon";

export const getAllTopUpRequest = async (): Promise<any> => {
  const url = Backend.TOPUP_SERVICE + "/list";
  // const params = {
  //     typeId: searchTypeId,
  //     name: searchTypeName
  // }
  return doGetRequest(url, null);
};

export const createTopUpRequest = async (
  amount: any,
  method: any
): Promise<any> => {
  const url = Backend.TOPUP_SERVICE + "/request";
  const request = {
    amount: amount,
    method: method,
    userId: getUserInfo()?.id,
  };
  return doPostRequest(url, request);
};
