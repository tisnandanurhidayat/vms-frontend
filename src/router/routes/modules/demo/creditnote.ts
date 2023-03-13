import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const CreditNote: AppRouteModule = {
  path: '/credit-note',
  name: 'CreditNote',
  component: LAYOUT,
  redirect: '/credit-note/index',
  meta: {
    orderNo: 30,
    hideChildrenInMenu: true,
    icon: 'mdi:receipt-text-arrow-left',
    title: t('Credit Note'),
  },
  children: [addIndex('index', 'CreditNote', 'Credit Note')],
};

export default CreditNote;
