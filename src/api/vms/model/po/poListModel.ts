import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type PoParams = BasicPageParams;

// TODO
export interface PoListItem {
  cdt: string;
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
