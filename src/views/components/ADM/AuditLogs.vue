<template>
  <CollapseContainer title="ACTION">
    <a-button @click="handleDelete" :type="'primary'">Hapus Audit Logs</a-button>
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

  const schemas: FormSchema[] = [
    {
      field: 'jobType',
      component: 'Select',
      label: 'Job Type',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '--Select Job Type--',
        options: [
          {
            label: 'Purchase Order',
            value: '1',
            key: '1',
          },
          {
            label: 'Receiving Advice',
            value: '2',
            key: '2',
          },
          {
            label: 'Receiving Advice ZC',
            value: '3',
            key: '3',
          },
          {
            label: 'Payment Reference Detail',
            value: '4',
            key: '4',
          },
        ],
      },
    },
    {
      field: 'sourceDate',
      component: 'DatePicker',
      label: 'Source Date',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '-- Pick Source Date --',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Source Date',
      dataIndex: 'sourceDate',
    },
    {
      title: 'Source',
      dataIndex: 'source',
    },
    {
      title: 'Process In',
      dataIndex: 'processIn',
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, BasicTable, TableAction },
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
        title: 'Tabel Audit Logs',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        actionColumn: {
          ellipsis: true,
          ellipsis: true,
          width: 120,
          title: 'Action',
          dataIndex: 'action',
        },
      });

      function handleViewDetail(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }
      function handleDelete(record: Recordable) {
        console.log('klik untuk menghapus', record);
      }

      return {
        registerTable,
        handleViewDetail,
        handleDelete,
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
