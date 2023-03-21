import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './layout-menu/childMenu';

const FEE_REBATE_PREFIX = 'FRE';

const buktipotongfeerebate: AppRouteModule = {
  path: '/bukti-potong-fee-rebate',
  name: 'BuktiPotongFeeRebate',
  component: LAYOUT,
  redirect: '/bukti-potong-fee-rebate',
  meta: {
    orderNo: 26,
    icon: 'vms-bukti-potong-fee|svg',
    title: t('Bukti Potong Fee Rebate'),
  },
  children: [
    addChild('view', 'ViewBuktiPotongFeeRebate', 'Lihat Data', FEE_REBATE_PREFIX),
    addChild('upload', 'UploadBuktiPotongFeeRebate', 'Upload Invoice', FEE_REBATE_PREFIX),
  ],
};

export default buktipotongfeerebate;
