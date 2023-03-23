import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const InvoiceReceipt: AppRouteModule = {
  path: '/invoice-receipt',
  name: 'InvoiceReceipt',
  component: LAYOUT,
  redirect: '/invoice-receipt/index',
  meta: {
    orderNo: 22,
    icon: 'vms-invoice-receipt|svg',
    hideChildrenInMenu: true,
    title: t('Invoice Receipt'),
  },
  children: [addIndex('index', 'InvoiceReceipt', 'Invoice Receipt')],
};

export default InvoiceReceipt;
