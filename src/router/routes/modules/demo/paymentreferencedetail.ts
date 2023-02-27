import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const PaymentReferenceDetail: AppRouteModule = {
  path: '/payment-reference-detail', //written as prh
  name: 'PaymentReferenceDetail',
  component: LAYOUT,
  redirect: '/payment-reference-detail',
  meta: {
    orderNo: 24,
    icon: 'ion:add-circle-outline',
    title: t('Payment Reference Detail'),
  },
};

export default PaymentReferenceDetail;
