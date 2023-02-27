import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const NotaRetur: AppRouteModule = {
  path: '/nota-retur',
  name: 'NotaRetur',
  component: LAYOUT,
  redirect: '/nota-retur',
  meta: {
    orderNo: 29,
    icon: 'ion:add-circle-outline',
    title: t('Nota Retur'),
  },
};

export default NotaRetur;
