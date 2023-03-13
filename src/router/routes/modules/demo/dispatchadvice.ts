import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';
import addIndex from './layout-menu/indexMenu';
import { LAYOUT } from '/@/router/constant';

const DispatchAdvice: AppRouteModule = {
  path: '/dispatch-advice',
  name: 'DispatchAdvice',
  redirect: '/dispatch-advice/index',
  component: LAYOUT,
  meta: {
    orderNo: 16,
    icon: 'ic:outline-local-shipping',
    hideChildrenInMenu: true,
    title: t('Dispatch Advice'),
  },
  children: [addIndex('index', 'DispatchAdvice', 'Dispatch Advice')],
};

export default DispatchAdvice;
