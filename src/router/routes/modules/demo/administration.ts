/* eslint-disable prettier/prettier */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

const Administration: AppRouteModule = {
  path: '/admin',
  name: 'Administration',
  component: LAYOUT,
  redirect: '/admin',
  meta: {
    orderNo: 12,
    icon: 'ion:add-circle-outline',
    title: t('Administration'),
  },
  children: [
    addChild('internal-user', 'InternalUsers', 'Internal Users'),
    addChild('archive-document', 'ArchiveDocument', 'Archive Document'),
    addChild('departments', 'Departments', 'Departments'),
    addChild('store', 'Store', 'Store'),
    addChild('process-logs', 'ProcessLogs', 'Process Logs'),
    addChild('business-unit', 'BusinessUnit', 'Business Unit'),
    addChild('warehouse', 'Warehouse', 'Warehouse'),
    addChild('', 'Platform', 'Platform'),
    addChild('configurations', 'Configurations', 'Configurations', [
      addChild('rar', 'RARNotification', 'RAR Notification'),
      addChild('pfir', 'PFIRNotification', 'PFIR Notification'),
      addChild('po-email', 'SupplierPONotification', 'Supplier PO Notification'),
      addChild('system', 'SystemConfiguration', 'System Configuration'),
    ]),
    addChild('re-process', 'Re-Process', 'Re-Process', [
      addChild('ra', 'RARe-Process', 'RA Re-Process'),
      addChild('po', 'PORe-Process', 'PO Re-Process'),
      addChild('prd', 'PRDRe-Process', 'PRD Re-Process'),
    ]),
    addChild('cron-job-logs', 'CronJobLogs', 'Cron Job Logs'),
    addChild('audit-logs', 'AuditLogs', 'Audit Logs'),
    addChild('announcements', 'Announcements', 'Announcements'),
  ],
};

export default Administration;
