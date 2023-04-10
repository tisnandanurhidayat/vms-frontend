import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';
// import addChild from './layout-menu/childMenu';
import addDetail from './layout-menu/detailMenu';

const PurchaseOrder: AppRouteModule = {
  path: '/purchase-order',
  name: 'PurchaseOrder',
  component: LAYOUT,
  redirect: '/purchase-order/index',
  meta: {
    orderNo: 15,
    icon: 'vms-purchase-order|svg',
    hideChildrenInMenu: true,
    title: t('Purchase Order'),
  },
  children: [
    addIndex('index', 'PurchaseOrder', 'Purchase Order'),
    addDetail('detail/:id', 'PurchaseOrderDetail', `PO Detail`),
  ],
};

export default PurchaseOrder;
