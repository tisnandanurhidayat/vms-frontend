import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dropship: AppRouteModule = {
  path: '/dropship',
  name: 'dropship',
  component: LAYOUT,
  redirect: '/dropship',
  meta: {
    orderNo: 35,
    icon: 'ion:add-circle-outline',
    title: t('Dropship'),
  },
};

export default dropship;
