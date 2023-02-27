import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const DispatchAdvice: AppRouteModule = {
  path: '/dispatch-advice',
  name: 'DispatchAdvice',
  component: LAYOUT,
  redirect: '/dispatch-advice',
  meta: {
    orderNo: 16,
    icon: 'ion:game-controller-outline',
    title: t('Dispatch Advice'),
  },
};

export default DispatchAdvice;
