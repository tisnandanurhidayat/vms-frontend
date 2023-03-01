import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import addIndex from './layout-menu/indexMenu';
import { LAYOUT } from '/@/router/constant';

const Invoice: AppRouteModule = {
  path: '/invoice',
  name: 'Invoice',
  component: LAYOUT,
  meta: {
    orderNo: 21,
    icon: 'ion:key-outline',
    hideChildrenInMenu: true,
    title: t('Invoice'),
  },
  children: [addIndex('index', 'Invoice', 'Invoice')],
};

export default Invoice;
