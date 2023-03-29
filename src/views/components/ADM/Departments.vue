<template>
  <CollapseContainer title="ACTION">
    <a-button type="primary" class="ml-2 btn">Download XLS</a-button>
  </CollapseContainer>
  <CollapseContainer title="FILTER">
    <BasicForm @register="register" @submit="handleSubmit" />
  </CollapseContainer>

  <div class="p-1">
    <BasicTable @register="registerTable" :canResize="false" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
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
      title: 'Kode Departemen',
      dataIndex: 'address', //'code'
    },
    {
      title: 'Nama Departemen',
      dataIndex: 'name',
    },
    {
      title: 'Departemen Nama Lokal',
      dataIndex: 'localName',
    },
    {
      title: 'Perubahan Terakhir',
      dataIndex: 'lastChange',
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, BasicTable },
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
        title: 'Tabel Departments',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        rowSelection: {
          type: 'checkbox',
        },
      });

      return {
        registerTable,
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
