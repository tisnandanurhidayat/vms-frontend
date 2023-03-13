import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const SUPPLIER_PREFIX = 'SUP';

const supplier: AppRouteModule = {
  path: '/supplier',
  name: 'Supplier',
  component: LAYOUT,
  // redirect: '/charts/echarts/map',
  meta: {
    orderNo: 13,
    icon: 'ic:baseline-groups',
    title: t('Supplier'),
  },
  // component: () => import('/@/views/demo/charts/map/Baidu.vue'),
  children: [
    addChild('master-detail', 'SupplierMasterDetail', 'Supplier Master Detail', SUPPLIER_PREFIX),
    addChild('registered', 'RegisteredSupplier', 'Registered Supplier', SUPPLIER_PREFIX),
    addChild('create', 'CreateSupplier', 'Create Supplier', SUPPLIER_PREFIX),
    addChild('users', 'SupplierUsers', 'SupplierUsers', SUPPLIER_PREFIX),
  ],
};

export default supplier;
