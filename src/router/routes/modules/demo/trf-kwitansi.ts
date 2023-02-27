import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const TrfKwitansi: AppRouteModule = {
  path: '/trfkwi',
  name: 'TrfKwitansi',
  component: LAYOUT,
  redirect: '/trfkwi',
  meta: {
    orderNo: 28,
    icon: 'ion:add-circle-outline',
    title: t('TRF - Kwitansi'),
  },
};

export default TrfKwitansi;
