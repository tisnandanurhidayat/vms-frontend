import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const EFaktur: AppRouteModule = {
  path: '/e-faktur',
  name: 'EFaktur',
  component: LAYOUT,
  // redirect: '/e-faktur',
  meta: {
    orderNo: 25,
    icon: 'ion:add-circle-outline',
    title: t('E-Faktur'),
  },
};

export default EFaktur;
