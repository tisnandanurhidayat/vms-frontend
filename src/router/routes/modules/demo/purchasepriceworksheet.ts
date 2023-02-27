import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const PurchasePriceWorksheet: AppRouteModule = {
  path: '/purchase-price-worksheet',
  name: 'PurchasePriceWorksheet',
  component: LAYOUT,
  redirect: '/purchase-price-worksheet',
  meta: {
    orderNo: 31,
    icon: 'ion:add-circle-outline',
    title: t('Purchase Price Worksheet'),
  },
};

export default PurchasePriceWorksheet;
