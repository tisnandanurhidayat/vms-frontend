import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const CreditNote: AppRouteModule = {
  path: '/credit-note',
  name: 'CreditNote',
  component: LAYOUT,
  redirect: '/credit-note',
  meta: {
    orderNo: 30,
    icon: 'ion:add-circle-outline',
    title: t('Credit Note'),
  },
};

export default CreditNote;
