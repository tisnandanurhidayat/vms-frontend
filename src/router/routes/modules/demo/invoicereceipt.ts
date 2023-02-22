import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const invoicereceipt: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/invoicereceipt',
  meta: {
    orderNo: 22,
    icon: 'ion:settings-outline',
    title: t('invoice receipt'),
  },
};

export default invoicereceipt;
