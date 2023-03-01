import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const DispatchAdvice: AppRouteModule = {
  path: '/dispatchadvice',
  name: 'DispathAdvice',
  component: LAYOUT,
  redirect: '/dispatchadvice/index',
  meta: {
    orderNo: 15,
    icon: 'ion:medkit-outline',
    title: t('Dispatch Advice'),
  },
  children: [
    {
      path: 'index',
      name: 'dispatchadvice',
      component: () => import('/@/views/demo/components/DispatchAdvice.vue'),
      meta: {
        title: t('Dispatch Advice'),
        icon: 'Dispatch Advice',
        hideMenu: true,
      },
    },
  ],
};

export default DispatchAdvice;
