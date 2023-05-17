<template>
  <CollapseContainer title="PURCHASE ORDER" :canExpan="false">
    <a-button @click="handlePrintSelected" :type="'primary'">Cetak yang dipilih</a-button>
    <a-button @click="handleDownloadXML" :type="'primary'" class="ml-2 btn">Download XML</a-button>
  </CollapseContainer>
  <CollapseContainer title="Filter">
    <BasicForm @register="register" @submit="handleFilter" />
  </CollapseContainer>
  <div class="p-1" style="background-color: white">
    <div style="margin-bottom: 8px">
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
    </div>
    <BasicTable @register="registerTable" :canResize="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
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
  import { BasicTable, FormProps, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { poListApi } from '/@/api/vms/purchaseOrder';
  import createOptions from './templates/dropdownOptions';
  import { router } from '/@/router';
  // import { useRefs } from '/@/hooks/core/useRefs';
  // import { useCdtSearch } from '../application/useCdtSearch';

  // let API_URL_PARAMS: Recordable;

  // for hard code purposes
  const TOKO_LIST = {
    '001': 'Toko 1',
    '002': 'Toko 2',
    '003': 'Toko 3',
    '042': 'Toko 42',
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
        onSubmit: (e: any) => {
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
        onSubmit: (e: any) => {
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
      componentProps: {
        onSubmit: (e: any) => {
          console.log(e);
        },
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
      field: 'store_code',
      component: 'Input',
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
  ];

  export function getFormPo(): Partial<FormProps> {
    return {
      schemas: [
        ...schemas,
        {
          field: 'id',
          component: 'Input',
          label: 'Search CDT/PO No',
          colProps: {
            span: 8,
          },
          componentProps: {
            placeholder: 'Search CDT/PO No',
            onChange: (e: any) => {
              return e;
            },
          },
        },
      ],
    };
  }

  const columns: BasicColumn[] = [
    { title: 'Referensi', dataIndex: 'id' },
    { title: 'Merchant', dataIndex: 'supplier_name_local' },
    { title: 'Nomer Order', dataIndex: 'po_no' },
    { title: 'Tanggal Order', dataIndex: 'created_on' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Perubahan Terakhir', dataIndex: 'last_updated_on' },
    { title: 'Toko', dataIndex: 'store_code' },
  ];

  var FORM_VALUES: Recordable;

  export default defineComponent({
    components: { BasicForm, CollapseContainer, TableAction, BasicTable },
    setup() {
      const check = ref(null);

      const [register] = useForm({
        labelWidth: 150,
        schemas,
        actionColOptions: {
          span: 20,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'MM-YYYY']],
      });

      const [registerTable, { getForm }] = useTable({
        title: 'Tabel Purchase Order',
        api: poListApi,
        columns: columns,
        useSearchForm: true,
        bordered: true,
        formConfig: getFormPo(),
        pagination: true,
        tableSetting: { fullScreen: true },
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          ellipsis: true,
          width: 250,
          title: 'Action',
          dataIndex: 'action',
        },
      });

      function handleViewDocument(record: Recordable) {
        console.log('klik untuk melihat detail', record.reference);
      }

      function handleViewDetail(record: Recordable) {
        router.push(`/purchase-order/detail/${record.reference}`);
      }

      function handlePrintSelected(record: Recordable) {
        //TODO
        console.log('klik untuk melihat detail', record);
      }

      function handleDownloadXML(record: Recordable) {
        //TODO
        console.log('klik untuk melihat detail', record);
      }

      return {
        registerTable,
        handleViewDocument,
        handleViewDetail,
        handlePrintSelected,
        handleDownloadXML,
        getForm,
        register,
        check,
      };
    },
    methods: {
      async handleFilter(values: Recordable) {
        FORM_VALUES = values;
        await this.getForm().setFieldsValue(FORM_VALUES);
        await this.getForm().submit();
      },
      async handleSearch(e: ChangeEvent) {
        const searchValueRef = ref('');
        searchValueRef.value = e.target.value;
        const SEARCH_FORM_VALUES = { ...FORM_VALUES, id: searchValueRef.value };
        await this.getForm().setFieldsValue(SEARCH_FORM_VALUES);
        await this.getForm().submit();
      },
    },
  });
</script>
