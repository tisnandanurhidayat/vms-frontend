import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const efaktur: AppRouteModule = {
  path: '/efaktur',
  name: 'efaktur',
  component: LAYOUT,
  redirect: '/efaktur',
  meta: {
    orderNo: 25,
    icon: 'ion:add-circle-outline',
    title: t('e-faktur'),
  },
};

export default efaktur;
