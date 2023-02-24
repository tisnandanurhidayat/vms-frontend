import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const Invoice: AppRouteModule = {
  path: '/invoice',
  name: 'Invoice',
  component: LAYOUT,
  redirect: '/invoice',
  meta: {
    orderNo: 21,
    icon: 'ion:key-outline',
    title: t('Invoice'),
  },
};

export default Invoice;
