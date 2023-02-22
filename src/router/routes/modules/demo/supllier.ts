import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const supplier: AppRouteModule = {
  path: '/supplier',
  name: 'Supplier',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 13,
    icon: 'ion:logo-buffer',
    title: t('supplier'),
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('wew'),
      },
      // component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
  ],
};

export default supplier;
