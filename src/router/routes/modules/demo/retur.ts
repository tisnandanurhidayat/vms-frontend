import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const RETUR_PREFIX = 'RET';

const retur: AppRouteModule = {
  path: '/retur',
  name: 'Retur',
  component: LAYOUT,
  redirect: '/retur',
  meta: {
    orderNo: 33,
    icon: 'ion:add-circle-outline',
    title: t('Retur'),
  },
  children: [
    addChild('request', 'ReturRequest', 'Retur Request', RETUR_PREFIX),
    addChild('request-response', 'ReturRequestResponse', 'Retur Request Response', RETUR_PREFIX),
    addChild('confirmation', 'ReturConfirmation', 'Retur Confirmation', RETUR_PREFIX),
    addChild(
      'confirmation?status=CLOSED',
      'ClosedReturConfirmation',
      'Closed Retur Confirmation',
      RETUR_PREFIX,
    ),
    addChild(
      'request-notification',
      'ReturRequestNotification',
      'Retur Request Notification',
      RETUR_PREFIX,
    ),
    addChild(
      'confirmation-notification',
      'ReturConfirmation',
      'Retur Confirmation Notification',
      RETUR_PREFIX,
    ),
  ],
};

export default retur;
