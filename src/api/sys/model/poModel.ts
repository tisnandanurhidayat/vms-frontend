import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type ListPoParams = BasicPageParams;
export type SearchPoParams = BasicPageParams;
export type AdvanceSearchPoParams = BasicPageParams;

export interface getPurchaseOrder {
  po_id: string;
}

export interface selectParams {
  id: number | string;
}

export interface advancePo {
  store_code:  string;
}


export interface ListInfo {
  id: string;
  delivery_to_local: string;
  store_code: string;
  country_code: string;
  delivery_to: string;
  department_name: string;
  supplier_name: string;
  supplier_name_local: string;
}

export interface getListInfo {
  id: string;
  delivery_to_local: string;
  store_code: string;
  country_code: string;
  delivery_to: string;
  department_name: string;
  supplier_name: string;
  supplier_name_local: string;
}


export interface FormListInfo {
  label: string;
  value: string;
}


export interface advanceSearchPO {
  store_code: string;
  // supplier_name_local: string;
  // supplier_code: string;
  // business_unit_name: string;
  // status: string;
  // start_date , end_date : Date;

}

export type PoListGetResultModel = BasicFetchResult<ListInfo>;
export type ResultSearchPo = BasicFetchResult<getPurchaseOrder>;
export type ResultAdvanceSearchPo = BasicFetchResult<advanceSearchPO>;