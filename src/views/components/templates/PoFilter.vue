<template>
  <CollapseContainer title="FILTER" :can-expan="false">
    <BasicForm @register="register" @submit="handleSubmit" />
  </CollapseContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { CollapseContainer } from '/@/components/Container/index';

  const schemas: FormSchema[] = [
    {
      field: 'merchant',
      component: 'Input',
      label: 'Merchant',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Merchant',
        onChange: (e: any) => {
          console.log(e);
        },
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
      field: 'Order Date From',
      component: 'RangePicker',
      label: 'Order From',
      colProps: {
        span: 8,
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
      field: 'store',
      component: 'Select',
      label: 'Toko',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: [
          {
            label: 'toko udin',
            value: '1',
            key: '1',
          },
          {
            label: 'toko rezeki',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'View Revised POs',
      component: 'CheckboxGroup',
      label: 'View Revised POs',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            value: '1',
          },
        ],
      },
    },
    {
      field: 'businessUnit',
      component: 'Select',
      label: 'Business Unit',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'All',
        options: [
          {
            label: 'IT',
            value: '1',
            key: '1',
          },
          {
            label: 'BOD',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'CDTorPONo',
      component: 'Input',
      label: 'Search CDT/PO No',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'Search CDT/PO No',
        onChange: (e: any) => {
          console.log(e);
        },
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
          span: 20,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'MM-YYYY']],
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
