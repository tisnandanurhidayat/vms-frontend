import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const proformainvoice: AppRouteModule = {
  path: '/proformainvoice',
  name: 'Proformainvoice',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 19,
    icon: 'ion:medkit-outline',
    title: t('proforma invoice'),
  },
  children: [
    {
      path: 'proformainvoice',
      name: 'proformainvoice',
      meta: {
        title: t('wew'),
      },
      component: () => import('/@/views/demo/charts/map/Baidu.vue'),
    },
  ],
};

export default proformainvoice;
