import { otherHttp } from '/@/utils/http/axios';
import { GetAccountInfoModel } from './model/accountModel';

enum Api {
  ACCOUNT_INFO = '/account/getAccountInfo',
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
}

// Get personal center-basic settings

export const accountInfoApi = () => otherHttp.get<GetAccountInfoModel>({ url: Api.ACCOUNT_INFO });

export const sessionTimeoutApi = () => otherHttp.post<void>({ url: Api.SESSION_TIMEOUT });

export const tokenExpiredApi = () => otherHttp.post<void>({ url: Api.TOKEN_EXPIRED });
