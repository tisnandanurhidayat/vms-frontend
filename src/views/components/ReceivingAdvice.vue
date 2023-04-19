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
  import { defineComponent , ref } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  // import createOptions from './templates/dropdownOptions';
  import { AdvanceSearchPoApi   } from '/@/api/sys/purchaseOrder';
  import { usePoStoreAdvance } from '/@/store/modules/PoAdvance';



  const PoStore = usePoStoreAdvance();
  console.log(PoStore)


  // async function ApiAdvance(record : Recordable) {
  //   const api = await PoStore.AdvancePo({
  //     store_code : '042',
  //   });
  //   console.log('api ', api , 'record1' , record);
  //   console.log('api ', api , 'record2' , record.store_code);
  //   return api;
  // }



  async function handleSubmit() {
  const a = await PoStore.AdvancePo({
  store_code : '',
   });
  console.log('record ')
  console.log(a);
  return a;
  }
  
  const schemas: FormSchema[] = [
    {
      field: 'store_code',
      component: 'Input',
      label: 'Merchant',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'store_code',
        // api: handleSubmit,
        onChange: (e: any) => {
          console.log('full ' , e.target);
          console.log('data ' , e.target._value);
          console.log(e.target);
          return e.target._value;
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
          return e;
        },
      },
    },
    // {
    //   field: 'store_code',
    //   component: 'Input',
    //   label: '字段1',

    //   colProps: {
    //     span: 8,
    //   },
    //   // componentProps:{},
    //   // can func
    //   componentProps: ({ schema, formModel }) => {
    //     console.log('form:', schema);
    //     console.log('formModel:', formModel);
    //     return {
    //       placeholder: '自定义placeholder',
    //       onChange: (e: any) => {
    //         console.log(e);
    //       },
    //     };
    //   },
    //   renderComponentContent: () => {
    //     return {
    //       prefix: () => 'pSlot',
    //       suffix: () => 'sSlot',
    //     };
    //   },
    // },
  ];

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

      const checkedKeys = ref<Array<string | number>>([]);
        console.log(checkedKeys)

      const [registerTable , {getForm}]  = useTable({
        title: 'Tabel Receiving Advice',
        api: AdvanceSearchPoApi,
        columns: columns,
        useSearchForm: true,
        emptyDataIsShowTable: true ,
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

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }


      function handleViewDocument(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handleViewDetail(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handlePrintSelected(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      // async function handleSubmit(record: Recordable) {
 
      //    const a = await PoStore.AdvancePo({
      //     store_code : record.store_code,
      //    });
      //   console.log(a);
      //   return a;
      // }
      


      return {
        // ApiAdvance,
        getFormValues,
        registerTable,
        handleViewDocument,
        handleViewDetail,
        handlePrintSelected,
        register,
        schemas,
        handleSubmit,
        // handleSubmit: (values: Recordable) => {
        //   createMessage.success('click search,values:' + JSON.stringify(values));
        // },
        setProps,
        // handleLoad,
      };
    },
  });
</script>
