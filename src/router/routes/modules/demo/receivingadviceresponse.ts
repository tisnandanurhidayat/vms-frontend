import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';

const ReceivingAdviceResponse: AppRouteModule = {
  path: '/receiving-advice-response',
  name: 'ReceivingAdviceResponse',
  component: LAYOUT,
  redirect: '/receiving-advice-response/index',
  meta: {
    orderNo: 18,
    icon: 'ion:rocket-outline',
    hideChildrenInMenu: true,
    title: t('Receiving Advice Response'),
  },
  children: [addIndex('index', 'ReceivingAdviceResponse', 'Receiving Advice Response')],
};

export default ReceivingAdviceResponse;
