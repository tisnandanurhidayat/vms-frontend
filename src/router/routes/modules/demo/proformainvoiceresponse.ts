import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const ProformaInvoiceResponse: AppRouteModule = {
  path: '/proforma-invoice-response',
  name: 'ProformaInvoiceResponse',
  component: LAYOUT,
  redirect: '/proforma-invoice-response/index',
  meta: {
    orderNo: 20,
    hideChildrenInMenu: true,
    icon: 'ion:receipt-outline',
    title: t('Proforma Invoice Response'),
  },
  children: [addIndex('index', 'ProformaInvoiceResponse', 'Proforma Invoice Response')],
};

export default ProformaInvoiceResponse;
