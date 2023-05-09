import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';
import addDetail from './layout-menu/detailMenu';

const InvoiceResponse: AppRouteModule = {
  path: '/invoice-response',
  name: 'InvoiceResponse',
  component: LAYOUT,
  redirect: '/invoice-response/index',
  meta: {
    orderNo: 21,
    icon: 'vms-invoice-response|svg',
    hideChildrenInMenu: true,
    title: t('Invoice Response'),
  },
  children: [
    addIndex('index', 'InvoiceResponse', 'Invoice Response'),
    addDetail('detail/:id', 'InvoiceResponseDetail', 'IR Detail'),
  ],
};

export default InvoiceResponse;
