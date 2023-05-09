/**
 * @description: Request list interface parameters
 */
export interface RaSupplierInfo {
  supplier: string;
  code: string;
  telephone: string;
  fax: string;
}

/**
 * @description: Request list return value
 */
export type RaSupplierInfoGetResultModel = RaSupplierInfo;
