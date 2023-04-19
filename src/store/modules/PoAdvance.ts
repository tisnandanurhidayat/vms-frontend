import { store } from '/@/store';
import { defineStore } from 'pinia';
import { PoListApi , AdvanceSearchPoApi} from '/@/api/sys/purchaseOrder'; 
import {  advancePo ,getListInfo, ListInfo, advanceSearchPO } from '/@/api/sys/model/poModel';
import {Po_List } from '/@/enums/cacheEnum';
import { getAuthCache } from '/@/utils/auth';

interface PurchaseOrderState {
  param: Nullable<advancePo>;
  sessionTimeout?: boolean;
  // lastUpdateTime: number;
}

export const usePoStoreAdvance = defineStore ({
  id: 'app-PoAdvance',
  state: ():PurchaseOrderState => ({
    param: null,
    // lastUpdateTime: 0,
  }),

  getters: {
    getParam(): advancePo {
      return this.param || getAuthCache<advancePo>(Po_List) || {};
    },
    resetState() {
      this.param = null;
    },

  },

  actions: {

    setParam(info: advancePo | null) {
      this.param = info;
      // this.lastUpdateTime = new Date().getTime();
      // setAuthCache(USER_INFO_KEY, info);
    },

    async AdvancePo(
      params: advancePo
      ):Promise<advanceSearchPO | null> {
        try {
          const { ... AdvancePo } = params;
          const AdvancePoo = await AdvanceSearchPoApi(AdvancePo);
          if (!params) return null;
          

          this.setParam(AdvancePo)
          return AdvancePoo;
          console.log(AdvancePoo)
        } catch (error) {
          return Promise.reject(error);
        }
    }


  }

})

export function usePurchaseOrderAdvanceStore() {
  return usePoStoreAdvance(store);
}
