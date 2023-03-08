// import { defHttp } from '/@/utils/http/axios';
// import { PurchaseOrderModel } from './model/purchaseOrderModel';
import { headers } from '../system/constants';
import axios from 'axios';
import endpoint from '../system/endpoint';
import qs from 'qs';

const path = {
  listDataPo: 'listDataPo',
  // searchByCdt: 'searchbycdt',
  // advanceSearch: 'advancesearch',
  // viewByCdt: 'viewbycdt',
};

export interface getPurchaseOrderParams {
  limit: number;
  page: number;
}

export const getPurchaseOrder = async (params: getPurchaseOrderParams) => {
  // const { cdt, ...axiosParams } = params;
  const options = {
    headers: {
      ...headers,
    },
    params,
    paramsSerializer: (params: getPurchaseOrderParams) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  };
  const response = await axios.get(`${endpoint.purchaseOrder}/${path.listDataPo}`, options);

  return response.data;
};
