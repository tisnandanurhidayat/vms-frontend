import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const CONTRACT_MANAGEMENT_PREFIX = 'CM';

const contractmanagement: AppRouteModule = {
  path: '/contract-management',
  name: 'ContractManagement',
  component: LAYOUT,
  redirect: '/contract-management',
  meta: {
    orderNo: 34,
    icon: 'simple-icons:handshake',
    title: t('Contract Management'),
  },
  children: [
    addChild(
      'upload-data-master',
      'UploadDataMaster',
      'Upload Data Master',
      CONTRACT_MANAGEMENT_PREFIX,
    ),
    addChild('new-agreement', 'NewAgreement', 'New Agreement', CONTRACT_MANAGEMENT_PREFIX),
    addChild('approval-pa', 'ApprovalPA', 'Approval PA', CONTRACT_MANAGEMENT_PREFIX),
    addChild('calculate-pa', 'CalculatePA', 'Calculate PA', CONTRACT_MANAGEMENT_PREFIX),
  ],
};

export default contractmanagement;
