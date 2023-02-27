import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const PurchaseOrder: AppRouteModule = {
  path: '/purchase-order',
  name: 'PurchaseOrder',
  component: LAYOUT,
  redirect: '/purchase-order',
  meta: {
    orderNo: 15,
    icon: 'ion:paw-outline',
    title: t('Purchase Order'),
  },
  children: [
    {
      path: 'index',
      name: 'purchaseorder',
      component: () => import('/@/views/demo/purchaseOrder/index.vue'),
      meta: {
        title: t('purchaseorder'),
        icon: 'purchaseorder',
        hideMenu: true,
      },
    },
  ],
};

export default PurchaseOrder;
