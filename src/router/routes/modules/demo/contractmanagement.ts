import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

const contractmanagement: AppRouteModule = {
  path: '/contract-management',
  name: 'ContractManagement',
  component: LAYOUT,
  redirect: '/contract-management',
  meta: {
    orderNo: 34,
    icon: 'ion:add-circle-outline',
    title: t('Contract Management'),
  },
  children: [
    addChild('upload-data-master', 'UploadDataMaster', 'Upload Data Master'),
    addChild('new-agreement', 'NewAgreement', 'New Agreement'),
    addChild('approval-pa', 'ApprovalPA', 'Approval PA'),
    addChild('calculate-pa', 'CalculatePA', 'Calculate PA'),
  ],
};

export default contractmanagement;
