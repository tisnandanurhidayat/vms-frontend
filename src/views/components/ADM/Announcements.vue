<template>
  <PageWrapper title="Announcement Forms">
    <div class="p-1">
      <div class="md:flex enter-y">
        <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
          <CollapseContainer title="Dashboard Announcement" :can-expan="false">
            <BasicForm @register="register" @submit="handleSubmit" /><!-- subject to change -->
          </CollapseContainer>
        </div>
        <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
          <CollapseContainer title="Log-In Announcement" :can-expan="false">
            <BasicForm @register="register" @submit="handleSubmit" /><!-- subject to change -->
          </CollapseContainer>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  // import { areaRecord } from '/@/api/demo/cascader';

  const schemas: FormSchema[] = [
    {
      field: 'announcementSubject',
      component: 'Input',
      label: 'Subject',
      colProps: {
        span: 16,
      },
      required: true,
      componentProps: {
        placeholder: ' ',
        //subject to change
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'announcementMessage',
      component: 'InputTextArea',
      label: 'Message',
      colProps: {
        span: 20,
      },
      required: true,
      componentProps: {
        placeholder: ' ',
        //subject to change
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'announcementImportance',
      component: 'Select',
      label: 'Importance',
      colProps: {
        span: 16,
      },
      required: true,
      defaultValue: {
        label: 'HIGH',
        value: '1',
        key: '1',
      },
      componentProps: {
        options: [
          {
            label: 'HIGH',
            value: '1',
            key: '1',
          },
          {
            label: 'MEDIUM',
            value: '2',
            key: '2',
          },
          {
            label: 'LOW',
            value: '3',
            key: '3',
          },
        ],
      },
    },
    {
      field: 'announcementPostStatus',
      component: 'CheckboxGroup',
      label: 'Post',
      colProps: {
        span: 16,
      },
      componentProps: {
        options: [
          {
            value: '1',
          },
        ],
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const { createMessage } = useMessage();

      const [register, { setProps }] = useForm({
        labelWidth: 100,
        schemas,
        actionColOptions: {
          span: 30,
        },
      });

      setProps({ showResetButton: false });

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
