import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const retur: AppRouteModule = {
  path: '/retur',
  name: 'retur',
  component: LAYOUT,
  redirect: '/retur',
  meta: {
    orderNo: 33,
    icon: 'ion:add-circle-outline',
    title: t('retur'),
  },
};

export default retur;
