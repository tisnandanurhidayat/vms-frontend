import type { AppRouteRecordRaw } from '/@/router/types';
import addLayout from './layoutMenu';

function addIndex(path: string, name: string, title: string): AppRouteRecordRaw {
  const component = () => {
    return import(/* @vite-ignore */ `/@/views/demo/components/${name}.vue`);
  };
  return addLayout(path, name, title, component, undefined, true);
}

export default addIndex;
