import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

const dropship: AppRouteModule = {
  path: '/dropship',
  name: 'dropship',
  component: LAYOUT,
  redirect: '/dropship',
  meta: {
    orderNo: 35,
    icon: 'ion:add-circle-outline',
    title: t('Dropship'),
  },
  children: [
    addChild('stock', 'DropshipStock', 'Dropship Stock'),
    addChild('location', 'DropshipLocation', 'Dropship Location'),
    addChild('order-tracking', 'DropshipOrderTracking', 'Dropship Order Tracking'),
    addChild('pfi', 'DropshipPFI', 'Dropship PFI'),
    addChild('sales-analyst', 'DropshipSalesAnalyst', 'Dropship Sales Analyst'),
    addChild('comission-invoice', 'DropshipComissionInvoice', 'DropshipComissionInvoice'),
    addChild('payable-invoice', 'DropshipPayableInvoice', 'Dropship Payable Invoice'),
    addChild('[LINK]', 'PickPackDropship', 'Pick Pack Dropship'),
  ],
};

export default dropship;
