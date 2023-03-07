<template>
  <PageWrapper title="Announcements">
    <div class="mb-4">
      <a-button @click="setProps({ labelWidth: 150 })" class="mr-2"> Change labelWidth </a-button>
      <a-button @click="setProps({ labelWidth: 120 })" class="mr-2"> restore labelWidth </a-button>
      <a-button @click="setProps({ size: 'large' })" class="mr-2"> Change Size </a-button>
      <a-button @click="setProps({ size: 'default' })" class="mr-2"> Restore Size </a-button>
      <a-button @click="setProps({ disabled: true })" class="mr-2"> Disable form </a-button>
      <a-button @click="setProps({ disabled: false })" class="mr-2"> Undisable </a-button>
      <a-button @click="setProps({ compact: true })" class="mr-2"> compact form </a-button>
      <a-button @click="setProps({ compact: false })" class="mr-2">
        restore normal spacing
      </a-button>
      <a-button @click="setProps({ actionColOptions: { span: 8 } })" class="mr-2">
        Operation button position
      </a-button>
    </div>
    <div class="mb-4">
      <a-button @click="setProps({ showActionButtonGroup: false })" class="mr-2">
        hide action button
      </a-button>
      <a-button @click="setProps({ showActionButtonGroup: true })" class="mr-2">
        Show action buttons
      </a-button>
      <a-button @click="setProps({ showResetButton: false })" class="mr-2">
        Hide reset button
      </a-button>
      <a-button @click="setProps({ showResetButton: true })" class="mr-2">
        Show reset button
      </a-button>
      <a-button @click="setProps({ showSubmitButton: false })" class="mr-2">
        hide query button
      </a-button>
      <a-button @click="setProps({ showSubmitButton: true })" class="mr-2">
        Show query button
      </a-button>
      <a-button
        @click="
          setProps({
            resetButtonOptions: {
              disabled: true,
              text: 'Reset New',
            },
          })
        "
        class="mr-2"
      >
        Modify the reset button
      </a-button>
      <a-button
        @click="
          setProps({
            submitButtonOptions: {
              disabled: true,
              loading: true,
            },
          })
        "
        class="mr-2"
      >
        Modify query button
      </a-button>
      <a-button @click="handleLoad" class="mr-2"> linkage echo </a-button>
    </div>
    <CollapseContainer title="useForm Example">
      <BasicForm @register="register" @submit="handleSubmit" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { areaRecord } from '/@/api/demo/cascader';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: 'Field 1',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'custom placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: 'Field 2',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: 'Field 3',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'fieldTime',
      component: 'RangePicker',
      label: 'time field',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: 'Field 4',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
            key: '1',
          },
          {
            label: 'Option 2',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: 'Field 5',
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
      field: 'field7',
      component: 'RadioGroup',
      label: 'Field 7',
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
      field: 'field8',
      component: 'ApiCascader',
      label: 'Linkage',
      colProps: {
        span: 8,
      },
      componentProps: {
        api: areaRecord,
        apiParamKey: 'parentCode',
        dataField: 'data',
        labelField: 'name',
        valueField: 'code',
        initFetchParams: {
          parentCode: '',
        },
        isLeaf: (record) => {
          return !(record.levelType < 3);
        },
      },
    },
    {
      field: 'field9',
      component: 'ApiCascader',
      label: 'linkage echo',
      colProps: {
        span: 8,
      },
      componentProps: {
        api: areaRecord,
        apiParamKey: 'parentCode',
        dataField: 'data',
        labelField: 'name',
        valueField: 'code',
        initFetchParams: {
          parentCode: '',
        },
        isLeaf: (record) => {
          return !(record.levelType < 3);
        },
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const { createMessage } = useMessage();

      const [register, { setProps, setFieldsValue, updateSchema }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM']],
      });

      async function handleLoad() {
        const promiseFn = function () {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                field9: ['430000', '430100', '430102'],
                province: 'Hunan Province',
                city: 'Changsha City',
                district: 'Yuelu District',
              });
            }, 1000);
          });
        };

        const item = await promiseFn();

        const { field9, province, city, district } = item as any;
        await updateSchema({
          field: 'field9',
          componentProps: {
            displayRenderArray: [province, city, district],
          },
        });
        await setFieldsValue({
          field9,
        });
      }

      return {
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
        handleLoad,
      };
    },
  });
</script>
