import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const NotaRetur: AppRouteModule = {
  path: '/nota-retur',
  name: 'NotaRetur',
  component: LAYOUT,
  redirect: '/nota-retur/index',
  meta: {
    orderNo: 29,
    icon: 'ion:add-circle-outline',
    hideChildrenInMenu: true,
    title: t('Nota Retur'),
  },
  children: [addIndex('index', 'NotaRetur', 'Nota Retur')],
};

export default NotaRetur;
