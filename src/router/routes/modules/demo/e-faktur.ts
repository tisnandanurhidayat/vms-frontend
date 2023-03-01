import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import addIndex from './layout-menu/indexMenu';
import { LAYOUT } from '/@/router/constant';

const EFaktur: AppRouteModule = {
  path: '/e-faktur',
  name: 'EFaktur',
  component: LAYOUT,
  redirect: '/e-faktur/index',
  meta: {
    orderNo: 25,
    icon: 'ion:add-circle-outline',
    hideChildrenInMenu: true,
    title: t('E-Faktur'),
  },
  children: [addIndex('index', 'EFaktur', 'E-Faktur')],
};

export default EFaktur;
