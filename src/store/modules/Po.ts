import { store } from '/@/store';
import { defineStore } from 'pinia';
import { PoListApi , AdvanceSearchPoApi} from '/@/api/sys/purchaseOrder'; 
import {  advancePo ,getListInfo, ListInfo, advanceSearchPO } from '/@/api/sys/model/poModel';
import {Po_List } from '/@/enums/cacheEnum';
import { getAuthCache } from '/@/utils/auth';

interface PurchaseOrderState {
  PoList: Nullable<ListInfo>;
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const usePoStore = defineStore ({
  id: 'app-Po',
  state: ():PurchaseOrderState => ({
    PoList: null,
    lastUpdateTime: 0,
  }),

  getters: {
    getListInfo(): ListInfo {
      return this.PoList || getAuthCache<ListInfo>(Po_List) || {};
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    },
    resetState() {
      this.PoList = null;
    },

  },

  actions: {

    setListInfo(info: getListInfo | null) {
      this.PoList = info;
      this.lastUpdateTime = new Date().getTime();
      // setAuthCache(USER_INFO_KEY, info);
    },
  
    async Po(): Promise<getListInfo>{
      const poList = await PoListApi();
      console.log(`${poList}`)
      this.setListInfo(poList);
      return poList;
    },
  }

})

export function usePurchaseOrderStore() {
  return usePoStore(store);
}
