<template>
  <PageWrapper title="UseForm operation example">
    <div>
      <a-button @click="setProps({ size: 'default' })" class="mr-2"> Pencarian Khusus </a-button>
    </div>
    <CollapseContainer title="Filter">
      <BasicForm @register="register" @submit="handleSubmit" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  // import { PageWrapper } from '/@/components/Page';

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
      field: 'Status',
      component: 'Select',
      label: 'Status',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Sembako',
            value: '1',
            key: '1',
          },
          {
            label: 'Batak',
            value: '2',
            key: '2',
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
        options: [
          {
            label: 'Indomaret',
            value: '1',
            key: '1',
          },
          {
            label: 'Udin',
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
        options: [
          {
            label: 'Keramik',
            value: '1',
            key: '1',
          },
          {
            label: 'Serba guna',
            value: '2',
            key: '2',
          },
        ],
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
      field: 'View Revised',
      component: 'Checkbox',
      label: 'View Revised POs',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'orderDate',
      component: 'RangePicker',
      label: 'Order Date From',
      colProps: {
        span: 8,
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
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
      return {
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
<style>
  .tombol {
    text-align: right;
  }
</style>
