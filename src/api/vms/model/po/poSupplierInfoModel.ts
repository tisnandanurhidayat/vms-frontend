/**
 * @description: Request list interface parameters
 */
export interface PoSupplierInfo {
  supplier: string;
  code: string;
  telephone: string;
  fax: string;
}

/**
 * @description: Request list return value
 */
export type PoSupplierInfoGetResultModel = PoSupplierInfo;
