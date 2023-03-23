<template>
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
  // import { PageWrapper } from '/@/components/Page';
  // import { areaRecord } from '/@/api/demo/cascader';

  const schemas: FormSchema[] = [
    {
      field: 'Search References',
      component: 'Input',
      label: 'Search References',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Search References',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'Upload Date From',
      component: 'RangePicker',
      label: 'Order From',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'Paid PO',
      component: 'CheckboxGroup',
      label: 'Paid PO',
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
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Referensi',
      dataIndex: 'no',
    },
    {
      title: 'nama gelar',
      dataIndex: 'name',
      width: 200,
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: 'Created Date',
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: 'Kode Supllier',
      dataIndex: 'name',
    },
    {
      title: 'Kode Toko',
      dataIndex: 'no',
    },
    {
      title: 'Status',
      dataIndex: 'status3',
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
        title: 'Tabel Archive Document',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        // rowKey: 'id',
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
        // handleLoad,
      };
    },
  });
</script>
