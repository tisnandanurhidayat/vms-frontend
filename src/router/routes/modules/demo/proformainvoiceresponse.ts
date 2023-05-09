import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';
import addDetail from './layout-menu/detailMenu';

const ProformaInvoiceResponse: AppRouteModule = {
  path: '/proforma-invoice-response',
  name: 'ProformaInvoiceResponse',
  component: LAYOUT,
  redirect: '/proforma-invoice-response/index',
  meta: {
    orderNo: 20,
    hideChildrenInMenu: true,
    icon: 'vms-proforma-invoice|svg',
    title: t('Proforma Invoice Response'),
  },
  children: [
    addIndex('index', 'ProformaInvoiceResponse', 'Proforma Invoice Response'),
    addDetail('detail/:id', 'ProformaInvoiceResponseDetail', `PFIR Detail`),
  ],
};

export default ProformaInvoiceResponse;
