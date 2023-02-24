import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const InvoiceReceipt: AppRouteModule = {
  path: '/invoice-receipt',
  name: 'InvoiceReceipt',
  component: LAYOUT,
  redirect: '/invoice-receipt',
  meta: {
    orderNo: 22,
    icon: 'ion:settings-outline',
    title: t('Invoice Receipt'),
  },
};

export default InvoiceReceipt;
