import type { AppRouteRecordRaw } from '/@/router/types';
import addLayout from './layoutMenu';

function addChild(
  path: string,
  name: string,
  title: string,
  componentPrefix?: string,
  children?: AppRouteRecordRaw[],
): AppRouteRecordRaw {
  const component = () => {
    return componentPrefix != undefined
      ? import(/* @vite-ignore */ `/@/views/demo/components/${componentPrefix}/${name}.vue`)
      : undefined;
  };
  return addLayout(path, name, title, component, children);
}

export default addChild;
