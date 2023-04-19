<template>
  <CollapseContainer title="INVOICE" :canExpan="false">
    <a-button @click="handlePrintSelected" :type="'primary'">Cetak yang dipilih</a-button>
    <a-button type="primary" class="ml-2 btn">Download XLS</a-button>
  </CollapseContainer>
  <CollapseContainer title="Filter">
    <div class="p-3"><BasicForm @register="register" @submit="handleFilter" /></div>
  </CollapseContainer>

  <div class="p-1" style="background-color: white">
    <div
      class="w-1/6 !md:mt-0 !md:mr-4"
      style="float: left; text-align: right; align-items: center; height: 32px; display: grid"
    >
      Search CDT/PO No: &nbsp;
    </div>
    <div class="w-1/4 !md:mt-0 !md:mr-4" style="float: left">
      <a-input ref="inputRef" allow-clear @change="handleSearch">
        <template #prefix></template>
      </a-input>
    </div>
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
  import { defineComponent, ref } from 'vue';
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
    DRAFT: 'Draft',
    SENT: 'Dikirim',
    ACKNOWLEDGED: 'Diakui',
    RECEIVED: 'Diterima',
    ACCEPTED: 'Disahkan',
    REJECTED: 'Ditolak',
    PAYMENT_READY: 'Siap untuk dibayar',
    PAYMENT_IN_TRANSIT: 'Pembayaran sedang berjalan',
    RECEIVED_BY_BANK: 'Diterima oleh Bank',
    UPLOADED_BY_BANK: 'Diupload oleh Bank',
    UNPAID: 'Tidak terbayar',
    PAID: 'Terbayar',
  };

  const schemas: FormSchema[] = [
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
      field: 'dateFrom',
      component: 'RangePicker',
      label: 'Date From',
      colProps: {
        span: 8,
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
      field: 'deptCodeFrom',
      component: 'Input',
      label: 'Dept Code From',
      colProps: {
        span: 8,
      },
      componentProps: {
        // placeholder: 'Kode Supplier',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'deptCodeTo',
      component: 'Input',
      label: 'Dept Code To',
      colProps: {
        span: 8,
      },
      componentProps: {
        // placeholder: 'Kode Supplier',
        onChange: (e: any) => {
          console.log(e);
        },
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
    {
      field: 'supplierCodeFrom',
      component: 'Input',
      label: 'Supp Code From',
      colProps: {
        span: 8,
      },
      componentProps: {
        // placeholder: 'Kode Supplier',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'supplierCodeTo',
      component: 'Input',
      label: 'Supp Code To',
      colProps: {
        span: 8,
      },
      componentProps: {
        // placeholder: 'Kode Supplier',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'consignment',
      component: 'Select',
      label: 'Consignment',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: createOptions({
          Y: 'Ya',
          N: 'Tidak',
        }),
      },
    },
    {
      field: 'digitalInvoice',
      component: 'Select',
      label: 'Digital Invoice',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: createOptions({
          Y: 'Ya',
          N: 'Tidak',
        }),
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Toko',
      dataIndex: 'store',
    },
    {
      title: 'Referensi',
      sorter: true,
      dataIndex: 'reference',
    },
    {
      title: 'Kode Supllier',
      sorter: true,
      dataIndex: 'supplierCode',
    },
    {
      title: 'Merchant',
      sorter: true,
      dataIndex: 'merchant',
    },
    {
      title: 'Total Amount Invoice',
      sorter: true,
      dataIndex: 'totalAmount',
    },
    {
      title: 'Tanggal Kirim',
      sorter: true,
      dataIndex: 'deliveryDate',
    },
    {
      title: 'Status',
      sorter: true,
      dataIndex: 'status',
    },
    {
      title: 'Revisi',
      sorter: true,
      dataIndex: 'revision',
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

      const searchValueRef = ref('');
      function handleSearch(e: ChangeEvent) {
        searchValueRef.value = e.target.value;
        console.log(searchValueRef.value);
      }

      return {
        registerTable,
        handleViewDocument,
        handleViewDetail,
        handlePrintSelected,
        register,
        schemas,
        handleFilter: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        handleSearch,
        setProps,
        // handleLoad,
      };
    },
  });
</script>
