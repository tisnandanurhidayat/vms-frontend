<template>
  <CollapseContainer title="ACTION">
    <a-button @click="resolveBatch" :type="'primary'">Batch Resolve/Close</a-button>
    <a-button @click="resolveSelected" :type="'primary'" class="ml-2">
      Resolve/Close selected logs
    </a-button>
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
            :stopButtonPropagation="true"
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
            label: 'Duplicate PO',
            value: '1',
            key: '1',
          },
          {
            label: 'No matching PO',
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
            label: 'PO',
            value: '1',
            key: '1',
          },
          {
            label: 'RA',
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
      dataIndex: 'date',
    },
    {
      title: 'Tipe Kesalahan',
      dataIndex: 'errorType',
    },
    {
      title: 'Ref',
      dataIndex: 'ref',
    },
    {
      title: 'Tipe Ref',
      dataIndex: 'refType',
    },
    {
      title: 'File Sumber',
      dataIndex: 'sourceFile',
    },
    {
      title: 'Pesan',
      dataIndex: 'message',
    },
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
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'MM-YYYY']],
      });

      const [registerTable] = useTable({
        title: 'Tabel Process Logs',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          ellipsis: true,
          width: 120,
          title: 'Action',
          dataIndex: 'action',
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
        resolveSelected: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
