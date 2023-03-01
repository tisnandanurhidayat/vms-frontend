import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const InvoiceResponse: AppRouteModule = {
  path: '/invoice-response',
  name: 'InvoiceResponse',
  component: LAYOUT,
  meta: {
    orderNo: 22,
    icon: 'ion:settings-outline',
    hideChildrenInMenu: true,
    title: t('Invoice Response'),
  },
  children: [addIndex('index', 'InvoiceResponse', 'Invoice Response')],
};

export default InvoiceResponse;
