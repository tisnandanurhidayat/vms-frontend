import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const report: AppRouteModule = {
  path: '/report',
  name: 'report',
  component: LAYOUT,
  redirect: '/report',
  meta: {
    orderNo: 32,
    icon: 'ion:add-circle-outline',
    title: t('report'),
  },
};

export default report;
