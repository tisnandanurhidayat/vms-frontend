import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const ProformaInvoice: AppRouteModule = {
  path: '/proforma-invoice',
  name: 'ProformaInvoice',
  component: LAYOUT,
  redirect: '/proforma-invoice/index',
  meta: {
    orderNo: 19,
    icon: 'vms-proforma-invoice|svg',
    title: t('Proforma Invoice'),
    hideChildrenInMenu: true,
  },
  children: [addIndex('index', 'ProformaInvoice', 'Proforma Invoice')],
};

export default ProformaInvoice;
