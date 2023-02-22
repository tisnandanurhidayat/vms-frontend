import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const consignment: AppRouteModule = {
  path: '/consignment',
  name: 'consignment',
  component: LAYOUT,
  redirect: '/consignment',
  meta: {
    orderNo: 23,
    icon: 'ion:add-circle-outline',
    title: t('consignment'),
  },
};

export default consignment;
