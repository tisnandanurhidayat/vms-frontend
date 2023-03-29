<template>
  <CollapseContainer title="ACTION">
    <a-button @click="createUser" :type="'primary'">Buat User Baru</a-button>
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
                label: 'Ubah',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: 'Nonaktifkan',
                onClick: handleNonactivate.bind(null, record),
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
  // import { Button } from '/@/components/Button';

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
      title: 'Nama Depan',
      dataIndex: 'address', //'firstName'
    },
    {
      title: 'Nama Belakang',
      dataIndex: 'lastName',
    },
    {
      title: 'User Name',
      dataIndex: 'username',
    },
    {
      title: 'User Role',
      dataIndex: 'role',
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
        title: 'Tabel Internal Users',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
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
      function handleActivate(record: Recordable) {
        console.log('klik untuk mengaktifkan', record);
      }
      function handleNonactivate(record: Recordable) {
        console.log('klik untuk menonaktifkan', record);
      }

      return {
        registerTable,
        handleEdit,
        handleActivate,
        handleNonactivate,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        createUser: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
