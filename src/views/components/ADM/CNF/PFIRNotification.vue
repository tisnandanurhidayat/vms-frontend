<template>
  <CollapseContainer title="ACTION">
    <a-button @click="createBusinessUnit" :type="'primary'"
      >Create PFIR Notification Configuration</a-button
    >
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
                label: 'Edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: 'Hapus',
                onClick: handleDelete.bind(null, record),
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
      title: 'Store Code',
      dataIndex: 'storeCode',
    },
    {
      title: 'Level 1',
      dataIndex: 'level1',
    },
    {
      title: 'Level 2',
      dataIndex: 'level2',
    },
    {
      title: 'Level 3',
      dataIndex: 'level3',
    },
    {
      title: 'Enabled',
      dataIndex: 'isEnabled',
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
        title: 'Tabel PFIR Notification Configuration',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        actionColumn: {
          ellipsis: true,
          width: 250,
          title: 'Action',
          dataIndex: 'action',
        },
      });

      function handleEdit(record: Recordable) {
        console.log('klik untuk mengedit', record);
      }
      function handleDelete(record: Recordable) {
        console.log('klik untuk menghapus', record);
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        createBusinessUnit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
