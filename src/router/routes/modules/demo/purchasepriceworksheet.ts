import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const PurchasePriceWorksheet: AppRouteModule = {
  path: '/purchase-price-worksheet',
  name: 'PurchasePriceWorksheet',
  component: LAYOUT,
  redirect: '/purchase-price-worksheet/index',
  meta: {
    orderNo: 31,
    icon: 'vms-purchase-price|svg',
    hideChildrenInMenu: true,
    title: t('Purchase Price Worksheet'),
  },
  children: [addIndex('index', 'PurchasePriceWorksheet', 'Purchase Price Worksheet')],
};

export default PurchasePriceWorksheet;
