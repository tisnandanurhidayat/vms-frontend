import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const contractmanagement: AppRouteModule = {
  path: '/contractmanagement',
  name: 'contractmanagement',
  component: LAYOUT,
  redirect: '/contractmanagement',
  meta: {
    orderNo: 34,
    icon: 'ion:add-circle-outline',
    title: t('Contract Management'),
  },
};

export default contractmanagement;
