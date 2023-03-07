<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicColumn, BasicTable, useTable } from '/@/components/Table';
  // import { getBasicData } from './tableData';
  function getArchiveDocumentData() {
    return (() => {
      const arr: any = [];
      for (let index = 1603148667100; index < 1603148667140; index++) {
        arr.push({
          reference: index,
          supplierCode: 'John Brown',
          storeCode: 40 - index,
          createdDate: new Date().toLocaleString(),
          status: index % 2 == 0 ? 'OK' : 'YES',
        });
      }
      return arr;
    })();
  }

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: 'Tree Form',
        columns: archiveDocumentColumns,
        rowSelection: {
          type: 'checkbox',
        },
        defSort: {
          field: 'reference',
          order: 'ascend',
        },
        titleHelpMessage:
          'The tree component cannot exist at the same time as the serial number column',
        rowKey: 'reference',
        dataSource: getArchiveDocumentData(),
        tableSetting: { fullScreen: true },
        bordered: true,
      });
      return { registerTable };
    },
  });
  const archiveDocumentColumns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'reference',
      fixed: 'left',
      sorter: true,
      width: 200,
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      width: 200,
      sorter: true,
    },
    {
      title: 'Kode Supplier',
      dataIndex: 'supplierCode',
      width: 150,
      sorter: true,
    },
    {
      title: 'Kode Toko',
      dataIndex: 'storeCode',
      width: 100,
      sorter: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 300,
      align: 'left',
    },
  ];
</script>
