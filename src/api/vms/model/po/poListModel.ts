import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type PoParams = BasicPageParams;
export type PoFilterParams = BasicPageParams & { store_code?:string };
export interface PoListItem {

  store_code: string;
 
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
