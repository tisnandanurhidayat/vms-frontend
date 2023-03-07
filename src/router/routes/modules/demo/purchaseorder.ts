import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const PurchaseOrder: AppRouteModule = {
  path: '/purchase-order',
  name: 'PurchaseOrder',
  redirect: 'purchase-order/index',
  component: LAYOUT,
  redirect: '/purchase-order/index',
  meta: {
    orderNo: 15,
    icon: 'ion:paw-outline',
    hideChildrenInMenu: true,
    title: t('Purchase Order'),
  },
  children: [addIndex('index', 'PurchaseOrder', 'Purchase Order')],
};

export default PurchaseOrder;
