import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const ReceivingAdvice: AppRouteModule = {
  path: '/receiving-advice',
  name: 'ReceivingAdvice',
  component: LAYOUT,
  redirect: '/receiving-advice',
  meta: {
    orderNo: 17,
    icon: 'ion:rainy-outline',
    title: t('Receiving Advice'),
  },
};

export default ReceivingAdvice;
