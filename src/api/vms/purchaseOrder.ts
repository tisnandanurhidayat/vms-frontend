import { defHttp } from '/@/utils/http/axios';
import { PoParams, PoListGetResultModel } from './model/poListModel';

enum Api {
  PO_LIST = '/purchase-order/getPoList',
  // DEMO_ARCHIVE_DOCUMENT_LIST = '/table/getDemoArchiveDocList'
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
