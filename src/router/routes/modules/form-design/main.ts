import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const permission: AppRouteModule = {
  path: '/form-designer',
  name: 'Form-designer',
  component: LAYOUT,
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: 'Form Design',
  },
  children: [
    {
      path: 'design',
      name: 'Design',
      meta: {
        title: 'Form Design',
      },
      component: () => import('/@/views/form-design/index.vue'),
    },
    {
      path: 'example1',
      name: 'Example1',
      meta: {
        title: 'Example',
      },
      component: () => import('/@/views/form-design/examples/baseForm.vue'),
    },
  ],
};

export default permission;
