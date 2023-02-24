import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const purchaseorder: AppRouteModule = {
  path: '/PurchaseOrder',
  name: 'Purchaseorder',
  component: LAYOUT,
  redirect: '/purchaseorder/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('purchaseorder'),
    orderNo: 14,
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

export default purchaseorder;
