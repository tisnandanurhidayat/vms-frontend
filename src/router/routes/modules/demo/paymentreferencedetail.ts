import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const PaymentReferenceDetail: AppRouteModule = {
  path: '/payment-reference-detail', //written as prh
  name: 'PaymentReferenceDetail',
  component: LAYOUT,
  redirect: '/payment-reference-detail/index',
  meta: {
    orderNo: 24,
    icon: 'material-symbols:quick-reference-all-outline-rounded',
    hideChildrenInMenu: true,
    title: t('Payment Reference Detail'),
  },
  children: [addIndex('index', 'PaymentReferenceDetail', 'Payment Reference Detail')],
};

export default PaymentReferenceDetail;
