import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const Dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/Dashboard/index',
  meta: {
    orderNo: 1,
    icon: 'ion:medkit-outline',
    title: t('Dashboard'),
    hideChildrenInMenu: true,
  },
  children: [addIndex('index', 'Dashboard', 'Dashboard')],
};

export default Dashboard;
