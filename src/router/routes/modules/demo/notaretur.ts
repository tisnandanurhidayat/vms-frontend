import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const notaretur: AppRouteModule = {
  path: '/notaretur',
  name: 'notaretur',
  component: LAYOUT,
  redirect: '/notaretur',
  meta: {
    orderNo: 29,
    icon: 'ion:add-circle-outline',
    title: t('nota retur'),
  },
};

export default notaretur;
