import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const ProformaInvoice: AppRouteModule = {
  path: '/proforma-invoice',
  name: 'ProformaInvoice',
  component: LAYOUT,
  redirect: '/proforma-invoice',
  meta: {
    orderNo: 19,
    icon: 'ion:medkit-outline',
    title: t('Proforma Invoice'),
  },
};

export default ProformaInvoice;
