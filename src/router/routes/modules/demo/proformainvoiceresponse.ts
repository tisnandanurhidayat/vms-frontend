import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const ProformaInvoiceResponse: AppRouteModule = {
  path: '/proforma-invoice-response',
  name: 'ProformaInvoiceResponse',
  component: LAYOUT,
  redirect: '/proforma-invoice-response',
  meta: {
    orderNo: 20,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('Proforma Invoice Response'),
  },
};

export default ProformaInvoiceResponse;
