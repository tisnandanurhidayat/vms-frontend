import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const CONSIGNMENT_PREFIX = 'CSG';

const consignment: AppRouteModule = {
  path: '/consignment',
  name: 'Consignment',
  component: LAYOUT,
  redirect: '/consignment',
  meta: {
    orderNo: 23,
    icon: 'ion:add-circle-outline',
    title: t('Consignment'),
  },
  children: [
    addChild('pfi', 'ConsignmentPFI', 'Consignment PFI', CONSIGNMENT_PREFIX),
    addChild('invoice', 'ConsignmentInvoice', 'Consignment Invoice', CONSIGNMENT_PREFIX),
    addChild('sales-analysis', 'SalesAnalysis', 'Sales Analysis', CONSIGNMENT_PREFIX),
    addChild(
      'sales-litigation-analysis',
      'SalesLitigationAnalysis',
      'Sales Litigation Analysis',
      CONSIGNMENT_PREFIX,
    ),
  ],
};

export default consignment;
