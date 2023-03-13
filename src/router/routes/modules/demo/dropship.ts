import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const DROPSHIP_PREFIX = 'DS';

const dropship: AppRouteModule = {
  path: '/dropship',
  name: 'dropship',
  component: LAYOUT,
  redirect: '/dropship',
  meta: {
    orderNo: 35,
    icon: 'bx:bxs-package',
    title: t('Dropship'),
  },
  children: [
    addChild('stock', 'DropshipStock', 'Dropship Stock', DROPSHIP_PREFIX),
    addChild('location', 'DropshipLocation', 'Dropship Location', DROPSHIP_PREFIX),
    addChild('order-tracking', 'DropshipOrderTracking', 'Dropship Order Tracking', DROPSHIP_PREFIX),
    addChild('pfi', 'DropshipPFI', 'Dropship PFI', DROPSHIP_PREFIX),
    addChild('sales-analyst', 'DropshipSalesAnalyst', 'Dropship Sales Analyst', DROPSHIP_PREFIX),
    addChild(
      'comission-invoice',
      'DropshipComissionInvoice',
      'DropshipComissionInvoice',
      DROPSHIP_PREFIX,
    ),
    addChild(
      'payable-invoice',
      'DropshipPayableInvoice',
      'Dropship Payable Invoice',
      DROPSHIP_PREFIX,
    ),
    addChild('[LINK]', 'PickPackDropship', 'Pick Pack Dropship', DROPSHIP_PREFIX),
  ],
};

export default dropship;
