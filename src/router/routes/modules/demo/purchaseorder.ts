import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const purchaseorder: AppRouteModule = {
  path: '/purchaseorder',
  name: 'Purchaseorder',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 15,
    icon: 'ion:paw-outline',
    title: t('purchase order'),
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

export default purchaseorder;
