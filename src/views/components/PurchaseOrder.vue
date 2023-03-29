<template>
  <CollapseContainer title="ACTION">
    <a-button @click="handlePrintSelected" :type="'primary'">Cetak yang dipilih</a-button>
    <a-button @click="handleDownloadXML" :type="'primary'" class="ml-2 btn">Download XML</a-button>
  </CollapseContainer>
  <CollapseContainer title="FILTER">
    <BasicForm @register="register" @submit="handleSubmit" />
  </CollapseContainer>

  <div class="p-1">
    <BasicTable @register="registerTable" :canResize="false">
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

  // for hard code purposes
  const BU_LIST = {
    BU1: 'BU 1',
    BU2: 'BU 2',
    BU3: 'BU 3',
  };

  const STATUS_LIST = {
    ALL: 'All',
    NEW: 'Baru',
    CONFIRMED: 'Menunggu respon',
    DA_CREATED: 'DA Draft',
    DA_SENT: 'DA Dikirim',
    RA_CREATED: 'RA Diterima',
    RA_LITIGATION: 'RA Litigasi',
    PFI_CREATED: 'PFI Diterima',
    PFI_LITIGATION: 'PFI Litigasi',
    INV_CREATED: 'Invoice Dibuat',
    INV_RECEIVED: 'Invoice Diterima',
    INV_ACCEPTED: 'Invoice Disahkan',
    INV_REJECTED: 'Invoice Ditolak',
    PAYMENT_READY: 'Siap untuk dibayar',
    PAYMENT_IN_TRANSIT: 'Pembayaran sedang berjalan',
    RECEIVED_BY_BANK: 'Diterima oleh Bank',
    UPLOADED_BY_BANK: 'Diupload oleh Bank',
    UNPAID: 'Tidak terbayar',
    PAID: 'Terbayar',
    EXPIRED: 'Expired',
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
      field: 'supplierCode',
      component: 'Input',
      label: 'Kode Supplier',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Kode Supplier',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'orderFrom',
      component: 'RangePicker',
      label: 'Order From',
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
      field: 'isRevisedPO',
      component: 'CheckboxGroup',
      label: 'View Revised POs',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            value: '1',
          },
        ],
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
      field: 'CDTorPONo',
      component: 'Input',
      label: 'Search CDT/PO No',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Search CDT/PO No',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'reference',
    },
    {
      title: 'Merchant',
      dataIndex: 'merchant',
    },
    {
      title: 'Nomer Order',
      dataIndex: 'orderNo',
    },
    {
      title: 'Tanggal Order',
      dataIndex: 'orderDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Perubahan Terakhir',
      dataIndex: 'lastChange',
    },
    {
      title: 'Toko',
      dataIndex: 'store',
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
        title: 'Tabel Purchase Order',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
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

      function handleDownloadXML(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      return {
        registerTable,
        handleViewDocument,
        handleViewDetail,
        handlePrintSelected,
        handleDownloadXML,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
