import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const administration: AppRouteModule = {
  path: '/administration',
  name: 'Administration',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 12,
    icon: 'ion:add-circle-outline',
    title: t('administration'),
  },
  children: [
    {
      path: 'administration',
      name: 'administration',
      meta: {
        title: t('wew'),
      },
      // component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
  ],
};

export default administration;
