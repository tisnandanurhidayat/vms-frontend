/* eslint-disable prettier/prettier */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const ADMINISTRATION_PREFIX = 'ADM';
const CONFIGURATION_PREFIX = 'ADM/CNF';
const RE_PROCESS_PREFIX = 'ADM/REP';

const Administration: AppRouteModule = {
  path: '/admin',
  name: 'Administration',
  component: LAYOUT,
  redirect: '/admin',
  meta: {
    orderNo: 12,
    icon: 'vms-administration|svg',
    title: t('Administration'),
  },
  children: [
    addChild('internal-user', 'InternalUsers', 'Internal Users', ADMINISTRATION_PREFIX),
    addChild('archive-document', 'ArchiveDocument', 'Archive Document', ADMINISTRATION_PREFIX),
    addChild('departments', 'Departments', 'Departments', ADMINISTRATION_PREFIX),
    addChild('store', 'Store', 'Store', ADMINISTRATION_PREFIX),
    addChild('process-logs', 'ProcessLogs', 'Process Logs', ADMINISTRATION_PREFIX),
    addChild('business-unit', 'BusinessUnit', 'Business Unit', ADMINISTRATION_PREFIX),
    addChild('warehouse', 'Warehouse', 'Warehouse', ADMINISTRATION_PREFIX),
    addChild('', 'Platform', 'Platform', ADMINISTRATION_PREFIX),
    addChild('configurations', 'Configurations', 'Configurations', undefined, [
      addChild('rar', 'RARNotification', 'RAR Notification', CONFIGURATION_PREFIX),
      addChild('pfir', 'PFIRNotification', 'PFIR Notification', CONFIGURATION_PREFIX),
      addChild(
        'po-email',
        'SupplierPONotification',
        'Supplier PO Notification',
        CONFIGURATION_PREFIX,
      ),
      addChild('system', 'SystemConfiguration', 'System Configuration', CONFIGURATION_PREFIX),
    ]),
    addChild('re-process', 'Re-Process', 'Re-Process', undefined, [
      addChild('ra', 'RARe-Process', 'RA Re-Process', RE_PROCESS_PREFIX),
      addChild('po', 'PORe-Process', 'PO Re-Process', RE_PROCESS_PREFIX),
      addChild('prd', 'PRDRe-Process', 'PRD Re-Process', RE_PROCESS_PREFIX),
    ]),
    addChild('cron-job-logs', 'CronJobLogs', 'Cron Job Logs', ADMINISTRATION_PREFIX),
    addChild('audit-logs', 'AuditLogs', 'Audit Logs', ADMINISTRATION_PREFIX),
    addChild('announcements', 'Announcements', 'Announcements', ADMINISTRATION_PREFIX),
  ],
};

export default Administration;
