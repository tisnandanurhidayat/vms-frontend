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
  // import { poFilterApi } from '/@/api/vms/purchaseOrder';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // import { usePoStoreAdvance } from '/@/store/modules/PoAdvance';

  // const PoStoree = usePoStoreAdvance();

  import {
    BasicTable,
    useTable,
    BasicColumn,
    TableAction,
    BasicTableProps,
  } from '/@/components/Table';
  import { poListApi , poFilterApi } from '/@/api/vms/purchaseOrder';
  import createOptions from './templates/dropdownOptions';
  import { router } from '/@/router';
  import { DynamicProps } from '/#/utils';
  import { DEFAULT_SORT_FN } from '/@/components/Table/src/const';
  // import { useRefs } from '/@/hooks/core/useRefs';
  // import { useCdtSearch } from '../application/useCdtSearch';

  let API_URL_PARAMS: Recordable;

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
      field: 'store_code',
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
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'reference',
      sorter: true,
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
      dataIndex: 'store_code',
    },
  ];

  // const apiResult = await poListApi({ page: 1, pageSize: 200 });
  // console.log(apiResult.items);
  let registerTableProp: Partial<DynamicProps<BasicTableProps<any>>> = {
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
    },
    sortFn: DEFAULT_SORT_FN,
  };

  export default defineComponent({
    components: { BasicForm, CollapseContainer, TableAction, BasicTable },
    setup() {
      // const { createMessage } = useMessage();

      const [register, { setProps }] = useForm({
        labelWidth: 150,
        schemas,
        actionColOptions: {
          span: 20,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'MM-YYYY']],
      });

      let registerTableProp: Partial<DynamicProps<BasicTableProps<any>>> = {
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
        },
        sortFn: DEFAULT_SORT_FN,
      };

      let [registerTable] = useTable({
        // dataSource: apiResult.items,
        api: poListApi,
        ...registerTableProp,
      });
      // API_URL_PARAMS.pageSize =

      // const [refs] = useRefs();
      // const { handleSearch } = useCdtSearch(refs);
      // const { handleSearch, searchResult, keyword, activeIndex } = useCdtSearch(refs);

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

      // async function handleFilter(values: Recordable) {
      //   const apiResult = await poFilterApi({ page: 1, pageSize: 200, ...values });
      //   // const apiResult = await filterApi({ page: 1, pageSize: 200, ...values });
      //   [registerTable] = useTable({
      //     dataSource: apiResult.items,
      //     ...registerTableProp,
      //   });
      //   API_URL_PARAMS = values;
      // }

      // const searchValueRef = ref('');
      // async function handleSearch(e: ChangeEvent) {
      //   searchValueRef.value = e.target.value;
      //   const SEARCH_URL_PARAMS = { ...API_URL_PARAMS, cdt: searchValueRef.value };
      //   const apiResult = await poListApi({ page: 1, pageSize: 200, ...SEARCH_URL_PARAMS });
      //   // const apiResult = await advanceSearchApi({ page: 1, pageSize: 200, ...SEARCH_URL_PARAMS });
      //   console.log(apiResult.items);
      //   [registerTable] = useTable({
      //     dataSource: apiResult.items,
      //     ...registerTableProp,
      //   });
      // }

      // async function handleFilter(record: Recordable) {
      //   const a = await PoStoree.AdvancePo({
      //     store_code : record.store_code,
      //    });
      //   console.log(record.store_code)
      //   return a;
      // }

      return {
        registerTable,
        handleViewDocument,
        handleViewDetail,
        handlePrintSelected,
        handleDownloadXML,
        register,
        schemas,
        // handleFilter,
        // handleSearch,
        setProps,
      };
    },
    methods: {
      async handleFilter(values: Recordable) {
        const apiResult = await poFilterApi({ page: 1, pageSize: 200, ...values });
        // const apiResult = await filterApi({ page: 1, pageSize: 200, ...values });
        // registerTable.tableAction;
        let [registerTable, { reload }] = useTable({
          dataSource: apiResult.items,
          ...registerTableProp,
        });
        API_URL_PARAMS = values;
        // this.$forceUpdate();
        reload();
        return registerTable;
      },
      async handleSearch(e: ChangeEvent) {
        const searchValueRef = ref('');
        searchValueRef.value = e.target.value;
        const SEARCH_URL_PARAMS = { ...API_URL_PARAMS, cdt: searchValueRef.value };
        const apiResult = await poListApi({ page: 1, pageSize: 200, ...SEARCH_URL_PARAMS });
        // const apiResult = await advanceSearchApi({ page: 1, pageSize: 200, ...SEARCH_URL_PARAMS });
        console.log(apiResult.items);
        const [registerTable, { reload }] = useTable({
          dataSource: apiResult.items,
          ...registerTableProp,
        });
        reload();
        return registerTable;
      },
    },
  });
</script>
