import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util';

function getRandomPics(count = 10): string[] {
  const arr: string[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
  }
  return arr;
}

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      reference: 'TRI1603238761026',
      id: `${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      merchant: 'DOMBA KECIL',
      // TRI1603238761026	DOMBA KECIL, CV	916021719	Wed, Mar 23,2016 15:27	Pembayaran sedang berjalan	Tue, Mar 29,2016 09:38	021 - Ambassador
      name: 'tisnanda',
      name1: '@cname()',
      name2: '@cname()',
      name3: '@cname()',
      name4: '@cname()',
      name5: '@cname()',
      name6: '@cname()',
      name7: '@cname()',
      name8: '@cname()',
      radio1: `选项${index + 1}`,
      radio2: `选项${index + 1}`,
      radio3: `选项${index + 1}`,
      avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': ['normal', 'enable', 'disable'],
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
      matchedPrice: 80000.0,
      freeQty: 0.0,
      orderedQty: 2.0,
      'isAccepted|1': [true, false],
      // contentQty:
      acceptedQty: 0.0,
      revised: 'N',
      serviceLevel: 0.0,
      description: 'TEST KETERANGAN',
      raId: '1116016047',
    });
  }
  return result;
})();

export default [
  {
    url: '/mock-api/table/getDemoList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
] as MockMethod[];
