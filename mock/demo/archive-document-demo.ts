import { resultPageSuccess } from 'mock/_util';
import { MockMethod } from 'vite-plugin-mock';

const demoArchiveDocList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 100; index++) {
    result.push({
      reference: `CTRI${1603148667100 + index}`,
      createdDate: new Date().toLocaleString(),
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/table/getDemoArchiveDocList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoArchiveDocList);
    },
  },
] as MockMethod[];
