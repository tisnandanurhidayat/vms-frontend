import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const receivingadvice: AppRouteModule = {
  path: '/receivingadvice',
  name: 'Receivingadvice',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 17,
    icon: 'ion:rainy-outline',
    title: t('receiving advice'),
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('wew'),
      },
      component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
  ],
};

export default receivingadvice;
