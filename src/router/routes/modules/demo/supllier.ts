import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

const supplier: AppRouteModule = {
  path: '/supplier',
  name: 'Supplier',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 13,
    icon: 'ion:logo-buffer',
    title: t('Supplier'),
  },
  // component: () => import('/@/views/demo/charts/map/Baidu.vue'),
  children: [
    addChild('master-detail', 'SupplierMasterDetail', 'Supplier Master Detail'),
    addChild('registered', 'RegisteredSupplier', 'Registered Supplier'),
    addChild('create', 'CreateSupplier', 'Create Supplier'),
    addChild('users', 'SupplierUsers', 'SupplierUsers'),
  ],
};

export default supplier;
