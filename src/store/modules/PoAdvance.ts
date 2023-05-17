import { store } from '/@/store';
import { defineStore } from 'pinia';
import { poFilterApi } from '/@/api/vms/purchaseOrder';
// import {  advancePo ,getListInfo, ListInfo, advanceSearchPO } from '/@/api/sys/model/poModel';
import { PoFilterParams } from '/@/api/vms/model/po/poListModel';
import { PoSearch } from '/@/enums/cacheEnum';
import { getAuthCache } from '/@/utils/auth';

interface PurchaseOrderState {
  param: Nullable<PoFilterParams>;
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
    // getParam(): PoFilterParams {
    //   return this.param || getAuthCache<PoFilterParams>(PoSearch) || {};
    // },
    resetState() {
      this.param = null;
    },

  },

  actions: {

    setParam(info: PoFilterParams | null) {
      this.param = info;
      // this.lastUpdateTime = new Date().getTime();
      // setAuthCache(USER_INFO_KEY, info);
    },

    async AdvancePo(
      params: PoFilterParams
      ) {
        try {
          const { ... AdvancePo } = params;
          const AdvancePoo = await poFilterApi(AdvancePo);
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