import { getParentLayout } from '/@/router/constant';
import type { AppRouteRecordRaw } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

function addChild(
  path: string,
  name: string,
  title: string,
  children?: AppRouteRecordRaw[],
): AppRouteRecordRaw {
  return {
    path: path,
    name: name,
    component: getParentLayout(name), //subject to change
    // component: getComponent(name)
    meta: {
      title: t(title),
    },
    children: children,
  };
}

export default addChild;
