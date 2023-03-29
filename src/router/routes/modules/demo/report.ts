import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const REPORT_PREFIX = 'REP';

const report: AppRouteModule = {
  path: '/report',
  name: 'Report',
  component: LAYOUT,
  redirect: '/report',
  meta: {
    orderNo: 32,
    icon: 'vms-report|svg',
    title: t('Report'),
  },
  children: [
    addChild('discrepancy', 'DiscrepancyReport', 'Discrepancy Report', undefined, [
      addChild(
        'quantity',
        'QuantityDiscrepencyReport',
        'Quantity Discrepency Report',
        REPORT_PREFIX,
      ),
      addChild('price', 'PriceDiscrepencyReport', 'Price Discrepency Report', REPORT_PREFIX),
    ]),
  ],
};

export default report;
