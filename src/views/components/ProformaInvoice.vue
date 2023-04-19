<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-Slot </template>
    <template #headerTop>
      <a-alert type="info" show-icon>
        <template #message>
          <template v-if="checkedKeys.length > 0">
            <span>check{{ checkedKeys.length }}Check</span>
            <a-button type="link" @click="checkedKeys = []" size="small">Small</a-button>
          </template>
          <template v-else>
            <span>velse</span>
          </template>
        </template>
      </a-alert>
    </template>
    <template #toolbar>
      <a-button type="primary" @click="getFormValues">getFormValues</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicColumn, BasicTable, useTable } from '/@/components/Table';
  import {  getFormConfig } from './tableData';
  import { Alert } from 'ant-design-vue';
  import { AdvanceSearchPoApi   } from '/@/api/sys/purchaseOrder';



  const columns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'id',
    },
    {
      title: 'Merchant',
      dataIndex: 'supplier_name_local',
    },
    {
      title: 'Nomer Order',
      dataIndex: 'po_no',
    },
    {
      title: 'Tanggal Order',
      dataIndex: 'created_on',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Perubahan Terakhir',
      dataIndex: 'last_updated_on',
    },
    {
      title: 'Toko',
      dataIndex: 'store_code',
    },
  ];

  export default defineComponent({
    components: { BasicTable, AAlert: Alert },
    setup() {
      const checkedKeys = ref<Array<string | number>>([]);
      const [registerTable, { getForm }] = useTable({
        title: 'Po',
        api: AdvanceSearchPoApi,
        columns: columns,
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
          // selectedRowKeys: checkedKeys,
          onChange: onSelectChange,
        },
      });
      

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        console.log(selectedRowKeys);
        checkedKeys.value = selectedRowKeys;
      }

      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,
      };
    },
  });
</script>
