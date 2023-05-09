import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type RaItemParams = BasicPageParams;

// TODO
export interface RaItemListItem {
  // code
  itemCode: string;
  itemCodeSub: string;
  itemCodeUnit: string;
  // itemName
  itemName: string;
  itemNameSub: string;
  // others
  freeQty: number;
  orderedQty: number;
  contentQty: number;
  acceptedQty: number;
  price: number;
  serviceLevel: number;
  // dataIndexes
  capacityAndBarcode: string;
  revised: string;
}

/**
 * @description: Request list return value
 */
export type RaItemListGetResultModel = BasicFetchResult<RaItemListItem>;
