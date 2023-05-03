<template>
  <CollapseContainer :title="'Receiving Advice CDT: ' + otherRaData.cdt" :canExpan="false">
    <a-button @click="handlePrint" :type="'primary'">Lihat versi cetak</a-button>
    <DocumentDropdownButton :documents="documents" :cdt="otherRaData.cdt" />
  </CollapseContainer>

  <div class="p-1">
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 mt-4 info-title"> Informasi Order </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="raOrderInfoData"
          :schema="raOrderInfoSchema"
        />
        <div class="mx-4 mt-4 info-title"> Informasi RA </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="rarInfoData"
          :schema="rarInfoSchema"
        />
      </div>
      <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 mt-4 info-title"> Informasi Supplier </div>
        <div class="mx-4 mb-2 destination"> {{ otherRaData.supplierDest }} </div>
        <Description
          size="small"
          :bordered="true"
          :column="2"
          :data="supplierData"
          :schema="supplierSchema"
        />
        <div class="p-4 mb-4 font-bold"> Note: Confirmed Order </div>
      </div>
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
        <template v-else-if="column.key === 'freeQty'">
          {{ record.freeQty.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'orderedQty'">
          {{ record.orderedQty.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'isAccepted'">
          <span v-if="record.isAccepted">Y</span>
          <span v-else-if="!record.isAccepted"><strong>N</strong></span>
          <span v-else-if="null"></span>
        </template>
        <template v-else-if="column.key === 'acceptedQty'">
          {{ record.acceptedQty.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'serviceLevel'">
          {{ record.serviceLevel.toFixed(2) }}%
        </template>
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { demoListApi } from '/@/api/demo/table';

  import {
    DocumentDropdownButton,
    ItemCodeCell,
    ItemNameCell,
  } from '/@/views/components/DetailTemplates';
  import {
    raOrderInfoSchema,
    raOrderInfoData,
    supplierData,
    supplierSchema,
    documents,
    otherRaData,
  } from './hard-code-materials/raData';
  import { rarInfoData, rarInfoSchema } from './hard-code-materials/rarData';
  import { Description } from '/@/components/Description';

  // COLOR #fcc0c0
  const columns: BasicColumn[] = [
    {
      title: 'Kode Barang',
      key: 'code',
      width: 120,
    },
    {
      title: 'Kapasitas/Barcode',
      dataIndex: 'capacityAndBarcode',
      width: 120,
    },
    {
      title: 'Nama Barang',
      key: 'itemName',
      width: 180,
    },
    {
      title: 'Gratis',
      key: 'freeQty',
      width: 80,
    },
    {
      title: 'Qty dipesan',
      key: 'orderedQty',
      width: 80,
    },
    {
      title: 'Qty konten',
      key: 'contentQty',
      width: 80,
    },
    {
      title: 'Terima',
      key: 'isAccepted',
      width: 80,
    },
    {
      title: 'Qty diterima',
      key: 'acceptedQty',
      width: 80,
    },
    {
      title: 'Revised',
      dataIndex: 'revised',
      width: 80,
    },
    {
      title: 'Service Level',
      key: 'serviceLevel',
      width: 80,
    },
    {
      title: 'Keterangan',
      dataIndex: 'description',
      width: 120,
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
    },
    setup() {
      const { createMessage } = useMessage();

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
        highlight: (data) => {
          return !data['isAccepted'];
        },
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

      return {
        registerTable,
        handleViewDocument,
        handlePrint,
        handleDownloadXML,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        raOrderInfoData,
        raOrderInfoSchema,
        rarInfoData,
        rarInfoSchema,
        supplierData,
        supplierSchema,
        documents,
        otherRaData,
      };
    },
  });
</script>

<style scoped>
  .destination {
    font-size: 20px;
  }

  .info-title {
    font-size: 14px;
    font-weight: bold;
  }
</style>
