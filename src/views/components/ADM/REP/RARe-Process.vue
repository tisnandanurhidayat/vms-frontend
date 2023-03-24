<template>
  <div class="p-4">
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <CollapseContainer title="Download RA Re-Process by Date" :can-expan="false">
          <BasicForm @register="register" @submit="handleSubmit" /><!-- subject to change -->
        </CollapseContainer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  const schemas: FormSchema[] = [
    {
      field: 'raDate',
      component: 'DatePicker',
      label: 'RA Date',
      colProps: {
        span: 30,
      },
      componentProps: {
        placeholder: '-- Pick Date --',
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
        labelWidth: 200,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });

      // setProps({ showResetButton: false });

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
