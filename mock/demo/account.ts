import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';

const userInfo = {
  name: 'Tisnanda',
  userid: '00000001',
  email: 'test@gmail.com',
  signature: 'Hai accepts all rivers, tolerance is great',
  introduction: 'Smile, work hard, appreciate',
  title: 'Interaction Expert',
  group:
    'A certain business group - a certain platform department - a certain technology department - UED',
  tags: [
    {
      key: '0',
      label: 'very thoughtful',
    },
    {
      key: '1',
      label: 'Focus on design',
    },
    {
      key: '2',
      label: 'Spicy~',
    },
    {
      key: '3',
      label: 'Long legs',
    },
    {
      key: '4',
      label: 'Chuanmeizi',
    },
    {
      key: '5',
      label: 'Hai Na Bai Chuan',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'Indonesia',
  address: 'Depok',
  phone: '085777164309',
};

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
