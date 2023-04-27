import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';

const poList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      reference: `TRI${1603238761026 + index}`,
      'merchant|1': ['PT. Unilever Indonesia', 'PT. Wings Sayap Emas', 'PT. Boga Sari'],
      orderNo: 916042922,
      orderDate: `@date('dd-MM-yyyy')`,
      status: 'Pembayaran selesai',
      lastChange: `@date('dd-MM-yyyy')`,
      'store|1': ['Lebak Bulus', 'Cempaka Putih', 'MT Haryono'],
    });
  }
  return result;
})();

export default [
  {
    url: '/mock-api/purchase-order/getPoList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, poList);
    },
  },
] as MockMethod[];
