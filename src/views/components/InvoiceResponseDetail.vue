<template>
  <CollapseContainer :title="'Invoice Response CDT: ' + otherInvData.cdt" :canExpan="false">
    <a-button @click="handleViewPrintedVersion" :type="'primary'">Lihat versi cetak</a-button>
    <DocumentDropdownButton :documents="documents" :cdt="otherInvData.cdt" />
  </CollapseContainer>

  <div class="p-1 main-card">
    <div class="mx-4 my-2 info-title"> Informasi Supplier </div>
    <div class="mx-4 mb-2 destination"> {{ supplierData.supplierName }} </div>
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-small md:w-3/5 w-full !md:mt-0">
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="supplierData"
          :schema="supplierSchema"
        />
      </div>
      <div class="ant-card md:w-2/5 w-full !md:mt-0 !md:mr-4">
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="supplierInvoiceData"
          :schema="supplierInvoiceSchema"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { DocumentDropdownButton, toFixedFloat } from '/@/views/components/DetailTemplates';
  import {
    supplierData,
    supplierSchema,
    supplierInvoiceData,
    supplierInvoiceSchema,
    documents,
    otherInvData,
  } from './hard-code-materials/irData';
  import { Description } from '/@/components/Description';

  export default defineComponent({
    components: {
      Description,
      CollapseContainer,
      DocumentDropdownButton,
    },
    setup() {
      const { createMessage } = useMessage();

      function handleViewDocument(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handleViewPrintedVersion(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handleTaxInvoiceAction(record: Recordable) {
        console.log(record);
      }

      return {
        handleViewDocument,
        handleViewPrintedVersion,
        handleTaxInvoiceAction,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        toFixedFloat,
        supplierData,
        supplierSchema,
        supplierInvoiceData,
        supplierInvoiceSchema,
        documents,
        otherInvData,
      };
    },
  });
</script>

<style scoped>
  .destination {
    font-size: 16px;
  }

  .info-title {
    font-size: 14px;
    font-weight: bold;
  }

  .main-card {
    background: white;
  }
</style>
