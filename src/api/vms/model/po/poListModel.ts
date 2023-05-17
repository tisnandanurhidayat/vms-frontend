import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type PoParams = BasicPageParams;
export type PoFilterParams = BasicPageParams & { store_code?:string };
export interface AdvanceSearch {

  store_code: string;
  supplier_name_local: string;
  id: string;
  supplier_code: string;
  business_unit_name: string;
  start_date: Date;
  status: string;
  end_date: Date; 
}
// TODO
export interface PoListItem {
  cdt: string;
  store_code: string;
  beginTime: string;
  endTime: string;
  address: string;
  name: string;
  no: number;
  status: number;
}

/**
 * @description: Request list return value
 */
export type PoListGetResultModel = BasicFetchResult<PoListItem>;
