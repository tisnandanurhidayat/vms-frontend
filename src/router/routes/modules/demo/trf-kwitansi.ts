import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const trfkwitansi: AppRouteModule = {
  path: '/trfkwitansi',
  name: 'trfkwitansi',
  component: LAYOUT,
  redirect: '/trfkwitansi',
  meta: {
    orderNo: 28,
    icon: 'ion:add-circle-outline',
    title: t('trf-kwitansi'),
  },
};

export default trfkwitansi;
