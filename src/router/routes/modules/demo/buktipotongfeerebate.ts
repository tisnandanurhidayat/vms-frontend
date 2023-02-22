import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const buktipotongfeerebate: AppRouteModule = {
  path: '/buktipotongfeerebate',
  name: 'buktipotongfeerebate',
  component: LAYOUT,
  redirect: '/buktipotongfeerebate',
  meta: {
    orderNo: 26,
    icon: 'ion:add-circle-outline',
    title: t('bukti potong feerebate'),
  },
};

export default buktipotongfeerebate;
