import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const PaymentReferenceDetail: AppRouteModule = {
  path: '/payment-reference-detail', //written as prh
  name: 'PaymentReferenceDetail',
  component: LAYOUT,
  meta: {
    orderNo: 24,
    icon: 'ion:add-circle-outline',
    hideChildrenInMenu: true,
    title: t('Payment Reference Detail'),
  },
  children: [addIndex('index', 'PaymentReferenceDetail', 'Payment Reference Detail')],
};

export default PaymentReferenceDetail;
