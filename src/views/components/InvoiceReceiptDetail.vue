<template>
  <CollapseContainer :title="'Invoice Receipt CDT: ' + otherInvrData.cdt" :canExpan="false">
    <a-button @click="handleViewPrintedVersion" :type="'primary'">Lihat versi cetak</a-button>
    <DocumentDropdownButton :documents="documents" :cdt="otherInvrData.cdt" />
  </CollapseContainer>

  <div class="p-1 main-card">
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-small md:w-2/5 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 my-2 info-title"> Informasi Order </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="invrOrderInfoData"
          :schema="invrOrderInfoSchema"
        />
      </div>
      <div class="ant-card ant-card-small md:w-3/5 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 my-2 info-title"> Informasi Supplier </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="supplierData"
          :schema="supplierSchema"
        />
      </div>
    </div>
    <div class="md:flex enter-y mt-4">
      <div class="ant-card ant-card-small md:w-2/5 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 my-2 info-title"> Detail Penerimaan Invoice </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="invoiceReceptionData"
          :schema="invoiceReceptionSchema"
        />
      </div>
    </div>
    <div class="ant-card ant-card-small md:w-2/5 w-full !md:my-8 !md:mr-4" id="additional-info">
      <div class="info-title">Keterangan:</div>
      <div>{{ otherInvrData.additionalInfo }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { DocumentDropdownButton, toFixedFloat } from '/@/views/components/DetailTemplates';
  import {
    invrOrderInfoData,
    invrOrderInfoSchema,
    supplierData,
    supplierSchema,
    invoiceReceptionData,
    invoiceReceptionSchema,
    documents,
    otherInvrData,
  } from './hard-code-materials/invrData';
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
        invrOrderInfoData,
        invrOrderInfoSchema,
        supplierData,
        supplierSchema,
        invoiceReceptionData,
        invoiceReceptionSchema,
        documents,
        otherInvrData,
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

  #additional-info {
    white-space: pre-line;
    font-size: 14px;
    background-color: #ee2a33;
    color: white;
    border-radius: 10px;
    padding: 16px;
  }
</style>
