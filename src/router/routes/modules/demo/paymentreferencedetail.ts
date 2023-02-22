import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const paymentreferencedetail: AppRouteModule = {
  path: '/paymentreferencedetail',
  name: 'paymentreferencedetail',
  component: LAYOUT,
  redirect: '/paymentreferencedetail',
  meta: {
    orderNo: 24,
    icon: 'ion:add-circle-outline',
    title: t('payment reference deta'),
  },
};

export default paymentreferencedetail;
