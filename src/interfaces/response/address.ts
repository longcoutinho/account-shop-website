export interface IProvinceRes {
  id: string;
  name: string;
  type: number;
  typeText: string;
  slug: string;
}

export interface IDistrictRes {
  id: string;
  name: string;
  provinceId: string;
  type: number;
  typeText: string;
}

export interface IWardRes {
  id: string;
  name: string;
  districtId: string;
  type: number;
  typeText: string;
}
