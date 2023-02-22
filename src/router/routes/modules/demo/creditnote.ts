import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const creditnote: AppRouteModule = {
  path: '/creditnote',
  name: 'creditnote',
  component: LAYOUT,
  redirect: '/creditnote',
  meta: {
    orderNo: 30,
    icon: 'ion:add-circle-outline',
    title: t('creditnote'),
  },
};

export default creditnote;
