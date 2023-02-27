import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

const report: AppRouteModule = {
  path: '/report',
  name: 'Report',
  component: LAYOUT,
  redirect: '/report',
  meta: {
    orderNo: 32,
    icon: 'ion:add-circle-outline',
    title: t('Report'),
  },
  children: [
    addChild('discrepancy', 'DiscrepancyReport', 'Discrepancy Report', [
      addChild('quantity', 'QuantityDiscrepencyReport', 'Quantity Discrepency Report'),
      addChild('price', 'PriceDiscrepencyReport', 'Price Discrepency Report'),
    ]),
  ],
};

export default report;
