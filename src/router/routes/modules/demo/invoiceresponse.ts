import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const InvoiceResponse: AppRouteModule = {
  path: '/invoice-response',
  name: 'InvoiceResponse',
  component: LAYOUT,
  redirect: '/invoice-response',
  meta: {
    orderNo: 22,
    icon: 'ion:settings-outline',
    title: t('Invoice Response'),
  },
};

export default InvoiceResponse;
