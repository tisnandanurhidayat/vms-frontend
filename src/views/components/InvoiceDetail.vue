<template>
  <CollapseContainer :title="'Invoice CDT: ' + otherInvData.cdt" :canExpan="false">
    <a-button @click="handlePrint" :type="'primary'">Lihat versi cetak</a-button>
    <DocumentDropdownButton :documents="documents" :cdt="otherInvData.cdt" />
  </CollapseContainer>

  <div class="p-1">
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 my-4 info-title"> Informasi Order </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="invOrderInfoData"
          :schema="invOrderInfoSchema"
        />
      </div>
      <div class="ant-card ant-card-bordered md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 mt-4 info-title"> Informasi Supplier </div>
        <div class="mx-4 mb-2 destination"> {{ supplierData.supplierName }} </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="supplierData"
          :schema="supplierSchema"
        />
      </div>
    </div>
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-bordered ant-card-small w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 my-4 info-title"> Detail Invoice </div>
        <Description
          size="small"
          :bordered="true"
          :column="{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }"
          :data="invDetailData"
          :schema="invDetailSchema"
        />
      </div>
    </div>
    <div class="ant-card ant-card-bordered ant-card-small w-full !md:mt-0 !md:mr-4">
      <div class="mx-4 my-4 info-title"> Berkas Faktur Pajak </div>
    </div>
    <div class="md:flex enter-y">
      <BasicTable @register="registerTaxInvoiceTable" class="main-table">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: '[Action Placeholder]',
                  onClick: handleTaxInvoiceAction.bind(null, record),
                },
              ]"
            />
          </template>
        </template>
      </BasicTable>
    </div>

    <div class="ant-card ant-card-bordered ant-card-small w-full !md:mt-0 !md:mr-4">
      <div class="mx-4 my-4 info-title"> Berkas Dokumen Pendukung </div>
    </div>
    <div class="md:flex enter-y">
      <BasicTable @register="registerSupportingDocumentTable" class="main-table">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'deliveryOrder'">
            <a :href="record.deliveryOrder" v-if="record.deliveryOrder != ''">
              <strong>Download Surat Jalan</strong>
            </a>
            <span style="font-style: italic" v-else> (tidak ada berkas) </span>
          </template>
          <template v-else-if="column.key === 'invoice'">
            <a :href="record.invoice" v-if="record.invoice != ''">
              <strong>Download Invoice</strong>
            </a>
            <span style="font-style: italic" v-else> (tidak ada berkas) </span>
          </template>
          <template v-else-if="column.key === 'receipt'">
            <a :href="record.receipt" v-if="record.receipt != ''">
              <strong>Download Kwitansi</strong>
            </a>
            <span style="font-style: italic" v-else> (tidak ada berkas) </span>
          </template>
        </template>
      </BasicTable>
    </div>
  </div>

  <div class="p-1" style="background-color: white">
    <BasicTable @register="registerTable" class="main-table">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'code'">
          <ItemCodeCell
            :itemCode="record.itemCode"
            :sub="record.itemCodeSub"
            :unit="record.itemCodeUnit"
          />
        </template>
        <template v-else-if="column.key === 'itemName'">
          <ItemNameCell :itemName="record.itemName" :sub="record.itemNameSub" />
        </template>
        <template v-else-if="column.key === 'totalQty'">
          {{ record.totalQty.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'price'">
          {{ record.price.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'priceBeforeTax'">
          {{ record.priceBeforeTax.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'priceAfterTax'">
          {{ record.priceAfterTax.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'taxPercentage'">
          {{ record.taxPercentage.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'luxuryTax'">
          {{ record.luxuryTax.toFixed(2) }}
        </template>
      </template>
    </BasicTable>
    <div class="md:flex enter-y">
      <div class="md:w-1/2 w-full !md:mt-0 !md:mr-4"><br /></div>
      <div class="md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="invPriceData"
          :schema="invPriceSchema"
        />
      </div>
    </div>
    <div class="py-4 px-6" id="additional-info">
      <div class="info-title">Keterangan:</div>
      <div>{{ otherInvData.additionalInfo }}</div>
      <br />
      <div class="info-title">Call Center:</div>
      <div>{{ otherInvData.callCenterInfo }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';

  import {
    DocumentDropdownButton,
    ItemCodeCell,
    ItemNameCell,
  } from '/@/views/components/DetailTemplates';
  import {
    invOrderInfoSchema,
    invOrderInfoData,
    supplierData,
    supplierSchema,
    invDetailData,
    invDetailSchema,
    invTaxInvoiceData,
    invSupportingDocumentData,
    invPriceSchema,
    invPriceData,
    documents,
    otherInvData,
  } from './hard-code-materials/invData';
  import { Description } from '/@/components/Description';

  const taxInvoiceColumns: BasicColumn[] = [
    { title: 'SEQ', dataIndex: 'seq', width: 120 },
    { title: 'Tipe', dataIndex: 'type', width: 120 },
    { title: 'File', dataIndex: 'file', width: 90 },
    { title: 'Order', dataIndex: 'order', width: 150 },
  ];

  const supportingDocumentColumns: BasicColumn[] = [
    { title: 'Surat Jalan', key: 'deliveryOrder', width: 60 },
    { title: 'Invoice', key: 'invoice', width: 60 },
    { title: 'Kwitansi', key: 'receipt', width: 60 },
  ];

  const columns: BasicColumn[] = [
    {
      title: 'Kode Barang',
      key: 'code',
      width: 120,
    },
    {
      title: 'Kapasitas/Barcode',
      dataIndex: 'capacityAndBarcode',
      width: 150,
    },
    {
      title: 'Nama Barang',
      key: 'itemName',
      width: 150,
    },
    {
      title: 'Total Qty',
      key: 'totalQty',
      width: 80,
    },
    {
      title: 'Harga Unit',
      key: 'price',
      width: 120,
    },
    {
      title: 'Harga Sebelum Pajak',
      key: 'priceBeforeTax',
      width: 150,
    },
    {
      title: 'Harga Setelah Pajak',
      key: 'priceAfterTax',
      width: 150,
    },
    {
      title: '% Pajak',
      key: 'taxPercentage',
      width: 80,
    },
    {
      title: 'PPN BM',
      key: 'luxuryTax',
      width: 80,
      minWidth: 80,
    },
  ];

  export default defineComponent({
    components: {
      Description,
      CollapseContainer,
      BasicTable,
      ItemCodeCell,
      ItemNameCell,
      DocumentDropdownButton,
      TableAction,
    },
    setup() {
      const { createMessage } = useMessage();

      const [registerTaxInvoiceTable] = useTable({
        dataSource: invTaxInvoiceData,
        columns: taxInvoiceColumns,
        bordered: true,
        tableSetting: { fullScreen: true },
        canResize: true,
        scroll: { y: 300 },
        pagination: false,
        showIndexColumn: false,
        actionColumn: { title: 'Action', dataIndex: 'action', width: 150, ellipsis: true },
      });

      const [registerSupportingDocumentTable] = useTable({
        dataSource: invSupportingDocumentData,
        columns: supportingDocumentColumns,
        bordered: true,
        tableSetting: { fullScreen: true },
        canResize: true,
        scroll: { y: 300 },
        pagination: false,
        showIndexColumn: false,
      });

      const [registerTable] = useTable({
        title: 'Tabel Item',
        api: demoListApi,
        columns: columns,
        bordered: true,
        tableSetting: { fullScreen: true },
        loading: true,
        pagination: false,
        canResize: true,
        scroll: { y: 300 },
        // showSummary: true,
      });

      function handleViewDocument(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handlePrint(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handleDownloadXML(record: Recordable) {
        console.log('klik untuk melihat detail', record);
      }

      function handleTaxInvoiceAction(record: Recordable) {
        console.log(record);
      }

      return {
        registerTaxInvoiceTable,
        registerSupportingDocumentTable,
        registerTable,
        handleViewDocument,
        handlePrint,
        handleDownloadXML,
        handleTaxInvoiceAction,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        invOrderInfoData,
        invOrderInfoSchema,
        supplierData,
        supplierSchema,
        invDetailData,
        invDetailSchema,
        invPriceData,
        invPriceSchema,
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

  #additional-info {
    white-space: pre-line;
    font-size: 14px;
    background-color: #ee2a33;
    color: white;
    border-radius: 20px;
    margin: 0px 10px 20px;
  }
</style>
