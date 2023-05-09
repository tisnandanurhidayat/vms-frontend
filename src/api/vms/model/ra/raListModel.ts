import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type RaParams = BasicPageParams;

// TODO
export interface RaListItem {
  reference: string;
  merchant: string;
  raNo: string;
  revision: string;
  raDate: string;
  status: string;
  store: string;
}

/**
 * @description: Request list return value
 */
export type RaListGetResultModel = BasicFetchResult<RaListItem>;
