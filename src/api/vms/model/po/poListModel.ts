import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type PoParams = BasicPageParams;

// TODO
export interface PoListItem {
  reference: string;
  merchant: string;
  orderNo: string;
  orderDate: string;
  status: string;
  lastChange: string;
  store: string;
}

/**
 * @description: Request list return value
 */
export type PoListGetResultModel = BasicFetchResult<PoListItem>;
