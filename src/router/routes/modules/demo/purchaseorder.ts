import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const PurchaseOrder: AppRouteModule = {
  path: '/purchaseorder',
  name: 'PurchaseOrder',
  component: LAYOUT,
  redirect: '/purchaseorder/index',
  meta: {
    orderNo: 15,
    icon: 'ion:medkit-outline',
    title: t('Purchase Order'),
  },
  children: [
    {
      path: 'index',
      name: 'purchaseorder',
      component: () => import('/@/views/demo/components/PurchaseOrder.vue'),
      meta: {
        title: t('purchaseorder'),
        icon: 'purchaseorder',
        hideMenu: true,
      },
    },
  ],
};

export default PurchaseOrder;
