import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const purchasepriceworksheet: AppRouteModule = {
  path: '/purchasepriceworksheet',
  name: 'purchasepriceworksheet',
  component: LAYOUT,
  redirect: '/purchasepriceworksheet',
  meta: {
    orderNo: 31,
    icon: 'ion:add-circle-outline',
    title: t('purchase price worksh'),
  },
};

export default purchasepriceworksheet;
