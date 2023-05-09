import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

const raList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      reference: `TRI${1603238761026 + index}`,
      'merchant|1': ['PT. Unilever Indonesia', 'PT. Wings Sayap Emas', 'PT. Boga Sari'],
      raNo: `${1116016047 + index}`,
      revision: 0,
      raDate: `@date('dd-MM-yyyy')`,
      'status|1': ['Disahkan', 'Baru', 'Litigasi', 'Menunggu Respon', 'Ditolak'],
      'store|1': ['Lebak Bulus', 'Cempaka Putih', 'MT Haryono'],
    });
  }
  return result;
})();

const raItemList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      itemCode: '22000001',
      itemCodeSub: '001',
      itemCodeUnit: '01',
      capacityAndBarcode: '1KGx1 / 2007330000000',
      itemName: 'CARICA FLOWER',
      itemNameSub: 'BUNGA PEPAYA',
      orderQuantity: 2.0,
      orderQuantityNormal: 'N',
      orderQuantityFree: 0.0,
      qtyPerPack: 1.0,
      totalQty: 2.0,
      price: 70000.0,
      freeQty: 0.0,
      orderedQty: 2.0,
    });
  }
  return result;
})();

const raOrderInfo = (() => {
  const result: any = {
    store: 'Transmart Ambassador',
    senderInfo: '8990210000000',
    deptCode: '22 Fruits and Vegetables',
    deliveryTo: 'Transmart Ambassador',
    orderNo: '916021719',
    orderDate: 'Wed, Mar 23,2016, 15:27',
    arrivalDate: 'Thu, Mar 24,2016, 00:00',
    companyName: 'PT. TRANS RETAIL INDONESIA',
    taxNo: '01.711.062.8-092.000',
    companyAddress: 'ITC Mall Ambassador JL. Prof.Dr.Satrio Jakarta Selatan 12950',
  };
  return result;
})();

const raSupplierInfo = (() => {
  const result: any = {
    supplier: 'PT Sayur Alam Lestari',
    code: 'N972',
    telephone: '0819-06543268',
    fax: '021-43931145',
  };
  return result;
})();

export default [
  {
    url: '/mock-api/receiving-advice/getPoList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, raList);
    },
  },
  {
    url: '/mock-api/receiving-advice/getPoItemList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, raItemList);
    },
  },
  {
    url: '/mock-api/receiving-advice/getPoOrderInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(raOrderInfo);
    },
  },
  {
    url: '/mock-api/receiving-advice/getPoSupplierInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(raSupplierInfo);
    },
  },
] as MockMethod[];
