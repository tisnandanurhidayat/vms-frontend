import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dispatchadvice: AppRouteModule = {
  path: '/dispatchadvice',
  name: 'Dispatchadvice',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 16,
    icon: 'ion:game-controller-outline',
    title: t('dispatch advice'),
  },
  children: [
    {
      path: 'baiduMap',
      name: 'baiduMap',
      meta: {
        title: t('wew'),
      },
      // component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
  ],
};

export default dispatchadvice;
