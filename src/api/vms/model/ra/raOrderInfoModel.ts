/**
 * @description: Request list interface parameters
 */
export interface RaOrderInfo {
  orderNo: string;
  orderDate: string;
  deptCode: string;
  requesterGroup: string;
  deliveryTo: string;
  recipientCode: string;
}

/**
 * @description: Request list return value
 */
export type RaOrderInfoGetResultModel = RaOrderInfo;
