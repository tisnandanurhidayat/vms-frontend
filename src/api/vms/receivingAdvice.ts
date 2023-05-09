import { defHttp } from '/@/utils/http/axios';
import { RaParams, RaListGetResultModel } from './model/ra/raListModel';
import { RaItemParams, RaItemListGetResultModel } from './model/ra/raItemListModel';
import { RaInfoGetResultModel } from './model/ra/raInfoModel';
import { RaOrderInfoGetResultModel } from './model/ra/raOrderInfoModel';
import { RaSupplierInfoGetResultModel } from './model/ra/raSupplierInfoModel';

enum Api {
  RA_LIST = '/receiving-advice/getRaList',
  RA_ITEM_LIST = `/receiving-advice/getRaItemList`,
  RA_INFO = `/receiving-advice/getRaInfo`,
  RA_ORDER_INFO = `/receiving-advice/getRaOrderInfo`,
  RA_SUPPLIER_INFO = `/receiving-advice/getRaSupplierInfo`,
}

/**
 * @description: Get sample list value
 */

export const raListApi = (params: RaParams) =>
  defHttp.get<RaListGetResultModel>({
    url: Api.RA_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const raItemListApi = (params: RaItemParams) =>
  defHttp.get<RaItemListGetResultModel>({
    url: Api.RA_ITEM_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const raInfoApi = () =>
  defHttp.get<RaInfoGetResultModel>({
    url: Api.RA_INFO,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const raOrderInfoApi = () =>
  defHttp.get<RaOrderInfoGetResultModel>({
    url: Api.RA_ORDER_INFO,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const raSupplierInfoApi = () =>
  defHttp.get<RaSupplierInfoGetResultModel>({
    url: Api.RA_SUPPLIER_INFO,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
