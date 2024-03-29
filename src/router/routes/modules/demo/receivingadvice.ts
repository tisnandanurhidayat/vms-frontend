import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import addIndex from './layout-menu/indexMenu';
import addDetail from './layout-menu/detailMenu';

const ReceivingAdvice: AppRouteModule = {
  path: '/receiving-advice',
  name: 'ReceivingAdvice',
  component: LAYOUT,
  redirect: '/receiving-advice/index',
  meta: {
    orderNo: 17,
    icon: 'vms-receiving-advice|svg',
    hideChildrenInMenu: true,
    title: t('Receiving Advice'),
  },
  children: [
    addIndex('index', 'ReceivingAdvice', 'Receiving Advice'),
    addDetail('detail/:id', 'ReceivingAdviceDetail', 'RA Detail'),
  ],
};

export default ReceivingAdvice;
