<template>
  <CollapseContainer title="ACTION">
    <a-button @click="handlePrintSelected" :type="'primary'">Cetak yang dipilih</a-button>
  </CollapseContainer>
  <CollapseContainer title="FILTER">
    <BasicForm @register="register" @submit="handleSubmit" />
  </CollapseContainer>

  <div class="p-1">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: 'Dokumen',
                onClick: handleViewDocument.bind(null, record),
              },
              {
                label: 'Detail',
                onClick: handleViewDetail.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';
  import createOptions from './templates/dropdownOptions';

  // for hard code purposes
  const TOKO_LIST = {
    TOKO1: 'Toko 1',
    TOKO2: 'Toko 2',
    TOKO3: 'Toko 3',
  };

  const BU_LIST = {
    BU1: 'BU 1',
    BU2: 'BU 2',
    BU3: 'BU 3',
  };

  const STATUS_LIST = {
    ALL: 'All',
    NEW: 'Baru',
    AWAITING_ACTION: 'Menunggu respon',
    REJECTED: 'Ditolak',
    ACCEPTED: 'Disahkan',
    LITIGATION: 'Litigasi',
    CANCELLED: 'Ditolak',
  };

  const schemas: FormSchema[] = [
    {
      field: 'merchant',
      component: 'Input',
      label: 'Merchant',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Merchant',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'PFIFrom',
      component: 'RangePicker',
      label: 'PFI Date From',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'status',
      component: 'Select',
      label: 'Status',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '--Select--',
        options: createOptions(STATUS_LIST),
      },
    },
    {
      field: 'CDTorPONo',
      component: 'Input',
      label: 'Search CDT/No',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Search CDT/No',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'store',
      component: 'Select',
      label: 'Toko',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: createOptions(TOKO_LIST),
      },
    },
    {
      field: 'businessUnit',
      component: 'Select',
      label: 'Business Unit',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: createOptions(BU_LIST),
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'no',
    },
    {
      title: 'Merchant',
      dataIndex: 'merchant',
    },
    {
      title: 'Toko',
      dataIndex: 'store',
    },
    {
      title: 'Revisi',
      dataIndex: 'revision',
    },
    {
      title: 'Tanggal diterima',
      dataIndex: 'acceptedDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, TableAction, BasicTable },
    setup() {
      const { createMessage } = useMessage();

      const [register, { setProps }] = useForm({
        labelWidth: 150,
        schemas,
        actionColOptions: {
          span: 20,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'MM-YYYY']],
      });

      const [registerTable] = useTable({
        title: 'Tabel Proforma Invoice Response',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        // rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          ellipsis: true,
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleViewDocument(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handleViewDetail(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handlePrintSelected(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      return {
        registerTable,
        handleViewDocument,
        handleViewDetail,
        handlePrintSelected,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
        // handleLoad,
      };
    },
  });
</script>
