import { otherHttp } from '/@/utils/http/axios';
import { DemoParams, DemoListGetResultModel } from './model/tableModel';

enum Api {
  DEMO_LIST = '/table/getDemoList',
  // DEMO_ARCHIVE_DOCUMENT_LIST = '/table/getDemoArchiveDocList'
}

/**
 * @description: Get sample list value
 */

export const demoListApi = (params: DemoParams) =>
  otherHttp.get<DemoListGetResultModel>({
    url: Api.DEMO_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

// export const getDemoArchiveDocList = (params: DemoParams) =>
//   otherHttp.get<getDemoArchiveDocListGetResultModel>({
//     url. Api.
//   })
