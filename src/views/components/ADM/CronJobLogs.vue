<template>
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
                label: 'Run',
                onClick: handleRun.bind(null, record),
              },
              {
                label: 'Detail',
                onClick: handleViewDetail.bind(null, record),
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
  import createOptions from '/@/views/components/dropdownOptions';

  const JOB_TYPES = {
    ALL: 'All',
    MEGA_PI: 'Bank Mega PI Job',
    DAILY_INV: 'Daily Invoice Job',
    STORE_DIST: 'Store Dist Job',
    EMAIL_NOTIF: 'Email Notifications Job',
    DEPT_PROFIT: 'Department Profit Job',
    STORE_PROFIT: 'Store Profit Job',
    SUPPLIER: 'Supplier Job',
    SUPP_DEPT: 'Supplier Department Job',
    PFIR: 'Proforma Invoice Response Job',
    RAR: 'Receiving Advice Response Job',
    DA: 'Dispatch Advice Job',
    PO: 'Purchase Order Job',
    RA: 'Receving Advice Job',
    INV_IMA: 'Invoice IMA Job',
    PAYOUT: 'Payout Job',
  };

  const schemas: FormSchema[] = [
    {
      field: 'dateRange',
      component: 'RangePicker',
      label: 'Date From',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'Jobs',
      component: 'Select',
      label: 'Jobs',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '-- Select --',
        options: createOptions(JOB_TYPES),
      },
    },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Job',
      dataIndex: 'job',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Start Run Date',
      dataIndex: 'startRunDate',
    },
    {
      title: 'Elapse',
      dataIndex: 'elapse',
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
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM']],
      });

      const [registerTable] = useTable({
        title: 'Tabel Cron Job Logs',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        actionColumn: {
          width: 120,
          title: 'Action',
          dataIndex: 'action',
        },
      });

      function handleRun(record: Recordable) {
        console.log('klik untuk menjalankan', record);
      }
      function handleViewDetail(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      return {
        registerTable,
        handleRun,
        handleViewDetail,
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search, values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
