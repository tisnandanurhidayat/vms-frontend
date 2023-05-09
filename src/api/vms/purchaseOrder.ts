import { defHttp } from '/@/utils/http/axios';
import { PoParams, PoListGetResultModel } from './model/po/poListModel';
import { PoItemParams, PoItemListGetResultModel } from './model/po/poItemListModel';
import { PoOrderInfoGetResultModel } from './model/po/poOrderInfoModel';
import { PoSupplierInfoGetResultModel } from './model/po/poSupplierInfoModel';

enum Api {
  PO_LIST = '/purchase-order/getPoList',
  PO_ITEM_LIST = `/purchase-order/getPoItemList`,
  PO_ORDER_INFO = `/purchase-order/getPoOrderInfo`,
  PO_SUPPLIER_INFO = `/purchase-order/getPoSupplierInfo`,
}

/**
 * @description: Get sample list value
 */

export const poListApi = (params: PoParams) =>
  defHttp.get<PoListGetResultModel>({
    url: Api.PO_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const poItemListApi = (params: PoItemParams) =>
  defHttp.get<PoItemListGetResultModel>({
    url: Api.PO_ITEM_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const poOrderInfoApi = () =>
  defHttp.get<PoOrderInfoGetResultModel>({
    url: Api.PO_ORDER_INFO,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const poSupplierInfoApi = () =>
  defHttp.get<PoSupplierInfoGetResultModel>({
    url: Api.PO_SUPPLIER_INFO,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
