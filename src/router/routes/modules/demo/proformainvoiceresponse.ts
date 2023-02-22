import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const setup: AppRouteModule = {
  path: '/proformainvoiceresponse',
  name: 'proformainvoiceresponse',
  component: LAYOUT,
  redirect: '/proformainvoiceresponse',
  meta: {
    orderNo: 20,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('proforma invoice respon'),
  },
};

export default setup;
