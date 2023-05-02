import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type PoItemParams = BasicPageParams;

// TODO
export interface PoItemListItem {
  // code
  itemCode: string;
  itemCodeSub: string;
  itemCodeUnit: string;
  // itemName
  itemName: string;
  itemNameSub: string;
  // orderQuantity
  orderQuantity: number;
  orderQuantityNormal: string;
  orderQuantityFree: number;
  // others
  qtyPerPack: number;
  totalQty: number;
  price: number;
  // dataIndexes
  capacityAndBarcode: string;
}

/**
 * @description: Request list return value
 */
export type PoItemListGetResultModel = BasicFetchResult<PoItemListItem>;
