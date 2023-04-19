import { defHttp } from '/@/utils/http/axios';
import {  PoListGetResultModel , ListInfo ,
  SearchPoParams,advancePo, ResultSearchPo  , advanceSearchPO
} from './model/poModel';

enum Api {
  SearchPo = '/Po/searchPO',
  get_PO = '/Po/getPO' ,
  AdvancePo = '/Po/advanceSearchPO' ,
}

export function SearchPoApi(params: SearchPoParams) {
  return defHttp.post<ResultSearchPo>(
    {
      url: Api.SearchPo,
      params,
    }
);
}


export const PoListApi = () =>
  defHttp.get<ListInfo>({
    url: Api.get_PO,
    // params,
    // headers: {
    //   // @ts-ignore
    //   ignoreCancelToken: true,
    // },
  });


  export const AdvanceSearchPoApi = (params: advancePo) =>
  defHttp.post<advanceSearchPO>({
    url: Api.AdvancePo,
    params,
  });