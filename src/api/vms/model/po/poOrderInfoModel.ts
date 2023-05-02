/**
 * @description: Request list interface parameters
 */
export interface PoOrderInfo {
  store: string;
  senderInfo: string;
  deptCode: string;
  deliveryTo: string;
  orderNo: string;
  orderDate: string;
  arrivalDate: string;
  companyName: string;
  taxNo: string;
  companyAddress: string;
}

/**
 * @description: Request list return value
 */
export type PoOrderInfoGetResultModel = PoOrderInfo;
