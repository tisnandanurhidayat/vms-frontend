<template>
  <CollapseContainer title="ACTION">
    <a-button @click="createWarehouse">Create New Warehouse</a-button>
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
                label: 'Edit',
                onClick: handleEdit.bind(null, record),
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
      title: 'Warehouse Code',
      dataIndex: 'code',
    },
    {
      title: 'Warehouse Name',
      dataIndex: 'name',
    },
    {
      title: 'Toko',
      dataIndex: 'store',
    },
    {
      title: 'Int Code',
      dataIndex: 'intCode',
    },
    {
      title: 'For Interface',
      dataIndex: 'forInterface',
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
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM']],
      });

      const [registerTable] = useTable({
        title: 'Tabel Warehouse',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          width: 120,
          title: 'Action',
          dataIndex: 'action',
        },
      });

      function handleEdit(record: Recordable) {
        console.log('klik untuk mengedit', record);
      }

      return {
        registerTable,
        handleEdit,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        createWarehouse: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
