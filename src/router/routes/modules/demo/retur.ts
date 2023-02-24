import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

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
    addChild('request', 'ReturRequest', 'Retur Request'),
    addChild('request-response', 'ReturRequestResponse', 'Retur Request Response'),
    addChild('confirmation', 'ReturConfirmation', 'Retur Confirmation'),
    addChild('confirmation?status=CLOSED', 'ClosedReturConfirmation', 'Closed Retur Confirmation'),
    addChild('request-notification', 'ReturRequestNotification', 'Retur Request Notification'),
    addChild('confirmation-notification', 'ReturConfirmation', 'Retur Confirmation Notification'),
  ],
};

export default retur;
