<template>
  <CollapseContainer title="ACTION">
    <a-button @click="resolveBatch" :type="'primary'">Batch Resolve/Close</a-button>
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
                label: 'Close',
                onClick: handleResolve.bind(null, record),
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
      field: 'Cari Logs',
      component: 'Input',
      label: 'Cari Logs',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Cari Logs',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'Tipe Kesalahan',
      component: 'Select',
      label: 'Tipe Kesalahan',
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
      field: 'Tipe Referensi',
      component: 'Select',
      label: 'Tipe Referensi',
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
      field: 'Date From',
      component: 'RangePicker',
      label: 'Date From',
      colProps: {
        span: 8,
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Tanggal',
      dataIndex: 'beginTime',
    },
    {
      title: 'nama gelar',
      dataIndex: 'name',
      width: 200,
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: 'Tipe Kesalahan',
      dataIndex: 'namee',
    },
    {
      title: 'Ref',
      dataIndex: 'namee',
    },
    {
      title: 'Tipe Ref',
      dataIndex: 'namee',
    },
    {
      title: 'File Sumber',
      dataIndex: 'namee',
    },
    {
      title: 'Pesan',
      dataIndex: 'namee',
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
        title: 'Daftar ProcessLogs',
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

      function handleResolve(record: Recordable) {
        console.log('klik untuk menyelesaikan', record);
      }

      return {
        registerTable,
        handleResolve,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        resolveBatch: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
