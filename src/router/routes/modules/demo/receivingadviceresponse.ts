import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const receivingadviceresponse: AppRouteModule = {
  path: '/receivingadviceresponse',
  name: 'receivingadviceresponse',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 18,
    icon: 'ion:rocket-outline',
    title: t('receiving advice respon'),
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

export default receivingadviceresponse;
