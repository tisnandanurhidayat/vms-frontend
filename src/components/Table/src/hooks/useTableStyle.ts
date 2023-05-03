import type { ComputedRef } from 'vue';
import type { BasicTableProps, TableCustomRecord } from '../types/table';
import { unref } from 'vue';
import { isFunction } from '/@/utils/is';

export function useTableStyle(propsRef: ComputedRef<BasicTableProps>, prefixCls: string) {
  function getRowClassName(record: TableCustomRecord, index: number) {
    const { striped, rowClassName, highlight } = unref(propsRef);
    const classNames: string[] = [];
    if (highlight && isFunction(highlight)) {
      classNames.push(highlight(record) ? `${prefixCls}-row__highlighted` : '');
    }
    if (striped) {
      classNames.push(
        (index || 0) % 2 === 1 && !classNames.includes(`${prefixCls}-row__highlighted`)
          ? `${prefixCls}-row__striped`
          : '',
      );
    }
    if (rowClassName && isFunction(rowClassName)) {
      classNames.push(rowClassName(record, index));
    }
    return classNames.filter((cls) => !!cls).join(' ');
  }

  return { getRowClassName };
}
