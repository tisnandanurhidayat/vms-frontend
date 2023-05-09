<template>
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
      field: 'Search',
      component: 'Input',
      label: 'Search',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Search',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Kode Supplier',
      dataIndex: 'no',
    },
    {
      title: 'nama gelar',
      dataIndex: 'name',
      width: 200,
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: 'Nama Lokal',
      dataIndex: 'namee',
    },
    {
      title: 'ID Pajak',
      dataIndex: 'namee',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'P2P',
      dataIndex: 'namee',
    },
    {
      title: 'Tanggal Akhir Kerjasama',
      dataIndex: 'begin time',
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
          span: 20,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'MM-YYYY']],
      });

      const [registerTable] = useTable({
        title: 'Daftar Supplier Terdaftar',
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
