import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import addChild from './childMenu';

const buktipotongfeerebate: AppRouteModule = {
  path: '/bukti-potong-fee-rebate',
  name: 'BuktiPotongFeeRebate',
  component: LAYOUT,
  redirect: '/bukti-potong-fee-rebate',
  meta: {
    orderNo: 26,
    icon: 'ion:add-circle-outline',
    title: t('Bukti Potong Fee Rebate'),
  },
  children: [
    addChild('view', 'ViewBuktiPotongFeeRebate', 'Lihat Data'),
    addChild('upload', 'UploadBuktiPotongFeeRebate', 'Upload Invoice'),
  ],
};

export default buktipotongfeerebate;
