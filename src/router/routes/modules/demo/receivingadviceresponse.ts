import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';
import addDetail from './layout-menu/detailMenu';

const ReceivingAdviceResponse: AppRouteModule = {
  path: '/receiving-advice-response',
  name: 'ReceivingAdviceResponse',
  component: LAYOUT,
  redirect: '/receiving-advice-response/index',
  meta: {
    orderNo: 18,
    icon: 'vms-receiving-advice-resp|svg',
    hideChildrenInMenu: true,
    title: t('Receiving Advice Response'),
  },
  children: [
    addIndex('index', 'ReceivingAdviceResponse', 'Receiving Advice Response'),
    addDetail('detail/:id', 'ReceivingAdviceResponseDetail', 'RAR Detail'),
  ],
};

export default ReceivingAdviceResponse;
