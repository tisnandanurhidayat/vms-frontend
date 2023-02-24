import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

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
    addChild('pfi', 'ConsignmentPFI', 'Consignment PFI'),
    addChild('invoice', 'ConsignmentInvoice', 'Consignment Invoice'),
    addChild('sales-analysis', 'SalesAnalysis', 'Sales Analysis'),
    addChild('sales-litigation-analysis', 'SalesLitigationAnalysis', 'Sales Litigation Analysis'),
  ],
};

export default consignment;
