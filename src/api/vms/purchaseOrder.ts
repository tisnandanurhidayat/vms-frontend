import { defHttp } from '/@/utils/http/axios';
import { PoParams, PoListGetResultModel, PoFilterParams } from './model/po/poListModel';
import { PoItemParams, PoItemListGetResultModel } from './model/po/poItemListModel';
import { AdvanceSearch } from './model/po/poListModel';
import { PoOrderInfoGetResultModel } from './model/po/poOrderInfoModel';
import { PoSupplierInfoGetResultModel } from './model/po/poSupplierInfoModel';

enum Api {
  PO_LIST = '/po/getPO',
  PO_ADVANCE = '/po/getPoAll',
  AdvancePo = '/Po/advanceSearchPO' ,
  PO_ITEM_LIST = `/purchase-order/getPoItemList`,
  // PO_ORDER_INFO = `/purchase-order/getPoOrderInfo`,
  PO_ORDER_INFO = `/Po/viewbycdtdetail`,
  PO_SUPPLIER_INFO = `/Po/viewbycdtinfo`,
}

/**
 * @description: Get sample list value
 */

export const poListApi = (params: PoParams) =>
  defHttp.get<PoListGetResultModel>({
    url: Api.PO_LIST,
    params,
    timeout: 10000,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

  export const AdvanceSearchPoApi = (params: AdvanceSearch) =>
  defHttp.post({
    url: Api.AdvancePo,
    params,
  });

  export const poFilterApi = (params: PoFilterParams) =>
  defHttp.get<PoListGetResultModel>({
    url: Api.PO_ADVANCE,
    params,
    timeout: 100000,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

  // export const poDetailApi = (params: PoParams) =>
  // defHttp.get<PoListGetResultModel>({
  //   url: Api.PO_DETAIL,
  //   params,
  //   timeout: 100000,
  //   headers: {
  //     // @ts-ignore
  //     ignoreCancelToken: true,
  //   },
  // });

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
  defHttp.post<PoOrderInfoGetResultModel>({
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
