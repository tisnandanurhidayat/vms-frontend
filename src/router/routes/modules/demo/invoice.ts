import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import addIndex from './layout-menu/indexMenu';
import { LAYOUT } from '/@/router/constant';
import addDetail from './layout-menu/detailMenu';

const Invoice: AppRouteModule = {
  path: '/invoice',
  name: 'Invoice',
  component: LAYOUT,
  redirect: '/invoice/index',
  meta: {
    orderNo: 21,
    icon: 'vms-invoice|svg',
    hideChildrenInMenu: true,
    title: t('Invoice'),
  },
  children: [
    addIndex('index', 'Invoice', 'Invoice'),
    addDetail('detail/:id', 'InvoiceDetail', `Invoice Detail`),
  ],
};

export default Invoice;
