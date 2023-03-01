import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import addIndex from './layout-menu/indexMenu';
import { LAYOUT } from '/@/router/constant';

const TrfKwitansi: AppRouteModule = {
  path: '/trfkwi',
  name: 'TrfKwitansi',
  component: LAYOUT,
  meta: {
    orderNo: 28,
    icon: 'ion:add-circle-outline',
    hideChildrenInMenu: true,
    title: t('TRF - Kwitansi'),
  },
  children: [addIndex('index', 'TrfKwitansi', 'TRF - Kwitansi')],
};

export default TrfKwitansi;
