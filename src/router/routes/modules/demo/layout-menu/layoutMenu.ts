import type { AppRouteRecordRaw } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

function addLayout(
  path: string,
  name: string,
  title: string,
  component: AppRouteRecordRaw['component'],
  children?: AppRouteRecordRaw[],
  hideMenu?: boolean,
): AppRouteRecordRaw {
  return {
    path: path,
    name: name,
    component: component,
    meta: {
      title: t(title),
      hideMenu: hideMenu,
    },
    children: children,
  };
}

export default addLayout;
