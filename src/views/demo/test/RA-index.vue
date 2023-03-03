<template>
  <CollapseContainer title="FILTERS">
    <BasicForm @register="register" @submit="handleSubmit" />
  </CollapseContainer>

  <div class="p-1">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: 'edit',
                onClick: handleEdit.bind(null, record),
                auth: 'other', // 根据权限控制是否显示: 无权限，不显示
              },
              {
                label: 'Hapus',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
                auth: 'super', // 根据权限控制是否显示: 有权限，会显示
              },
            ]"
            :dropDownActions="[
              {
                label: 'aktifkan',
                popConfirm: {
                  title: 'apakah di aftifkan? ',
                  confirm: handleOpen.bind(null, record),
                },
                ifShow: (_action) => {
                  return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
                },
              },
              {
                label: 'dinonaktifkan',
                popConfirm: {
                  title: 'nonaktifkan? ',
                  confirm: handleOpen.bind(null, record),
                },
                ifShow: () => {
                  return record.status === 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
                },
              },
              {
                label: 'kontrol serentak',
                popConfirm: {
                  title: 'apakah anda ingin menampilkan secara dinamis? ',
                  confirm: handleOpen.bind(null, record),
                },
                auth: 'super', // 同时根据权限和业务控制是否显示
                ifShow: () => {
                  return true;
                },
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
  // import { PageWrapper } from '/@/components/Page';
  // import { areaRecord } from '/@/api/demo/cascader';

  const schemas: FormSchema[] = [
    {
      field: 'Merchant',
      component: 'Input',
      label: 'Merchant',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'merchant',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'Kode Supplier',
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
      field: 'Order Date From',
      component: 'RangePicker',
      label: 'Order From',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'Status',
      component: 'Select',
      label: 'Status',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '--Select--',
        options: [
          {
            label: 'toko sembako',
            value: '1',
            key: '1',
          },
          {
            label: 'toko buah',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'Toko',
      component: 'Select',
      label: 'Toko',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: [
          {
            label: 'toko udin',
            value: '1',
            key: '1',
          },
          {
            label: 'toko rezeki',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'view revised POs',
      component: 'CheckboxGroup',
      label: 'view revised POs',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            // label: '选项1',
            value: '1',
          },
        ],
      },
    },
    {
      field: 'Business Unit',
      component: 'Select',
      label: 'Business Unit',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: [
          {
            label: 'IT',
            value: '1',
            key: '1',
          },
          {
            label: 'BOD',
            value: '2',
            key: '2',
          },
        ],
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'no',
      width: 100,
    },
    {
      title: 'nama gelar',
      dataIndex: 'name',
      width: 200,
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: 'Merchant',
      dataIndex: 'name',
    },
    {
      title: 'Nomer Order',
      dataIndex: 'no',
    },
    {
      title: 'Tanggal Order',
      dataIndex: 'beginTime',
    },
    {
      title: 'Status',
      dataIndex: 'status3',
    },
    {
      title: 'Perubahan Terakhir',
      dataIndex: 'endTime',
      width: 200,
    },
    {
      title: 'Toko',
      dataIndex: 'name',
    },
    // {
    //   title: 'alamat',
    //   dataIndex: 'address',
    //   auth: 'super', // 同时根据权限和业务控制是否显示
    //   ifShow: (_column) => {
    //     return true;
    //   },
    // },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, TableAction, BasicTable },
    setup() {
      const { createMessage } = useMessage();

      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM']],
      });

      const [registerTable] = useTable({
        title: 'Tabel List RA',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        // rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleEdit(record: Recordable) {
        console.log('klik untuk mengedit', record);
      }
      function handleDelete(record: Recordable) {
        console.log('klik untuk menghapus', record);
      }
      function handleOpen(record: Recordable) {
        console.log('klik untuk mengaktifkan', record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        handleOpen,
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
