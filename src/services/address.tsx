import { doGetRequest } from "@/constants/FnCommon";

export const requestGetListProvinces = async (): Promise<any> => {
  const url = `https://open.oapi.vn/location/provinces?page=0&size=70`;
  return doGetRequest(url, null);
};

export const requestGetListDistricts = async (
  provinceId: string
): Promise<any> => {
  const url = `https://open.oapi.vn/location/districts??page=0&size=40&provinceId=${provinceId}`;
  return doGetRequest(url, null);
};

export const requestGetListWards = async (districtId: string): Promise<any> => {
  const url = `https://open.oapi.vn/location/wards?page=0&size=40&districtId=${districtId}`;
  return doGetRequest(url, null);
};
