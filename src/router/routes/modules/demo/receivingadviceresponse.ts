import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const ReceivingAdviceResponse: AppRouteModule = {
  path: '/receiving-advice-response',
  name: 'ReceivingAdviceResponse',
  component: LAYOUT,
  redirect: '/receiving-advice-response',
  meta: {
    orderNo: 18,
    icon: 'ion:rocket-outline',
    title: t('Receiving Advice Response'),
  },
};

export default ReceivingAdviceResponse;
