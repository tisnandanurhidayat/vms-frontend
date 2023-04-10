<template>
  <CollapseContainer
    :title="'Purchase Order CDT: ' + $route.params.id.toString()"
    :canExpan="false"
  >
    <a-button @click="handleDownloadXML" :type="'primary'">Download XML</a-button>
    <a-button @click="handlePrint" :type="'primary'" class="ml-2 btn">Lihat versi cetak</a-button>
    <DocumentDropdownButton :documents="documents" />
  </CollapseContainer>

  <div class="p-1">
    <div class="md:flex enter-y">
      <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 mt-4 info-title"> Informasi Order </div>
        <div class="mx-4 mb-2 destination"> Transmart Gresik Icon </div>
        <Description
          size="small"
          :bordered="true"
          :column="1"
          :data="orderInfoData"
          :schema="orderInfoSchema"
        />
      </div>
      <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
        <div class="mx-4 mt-4 info-title"> Informasi Supplier </div>
        <div class="mx-4 mb-2 destination"> SBY (POKKA) ESHAM DIMA MANDIRI PT </div>
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

  <div class="p-1">
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
        <template v-else-if="column.key === 'orderQuantity'">
          <QtyOrderCell
            :qtyOrder="record.orderQuantity"
            :qtyNormal="record.orderQuantityNormal"
            :qtyFree="record.orderQuantityFree"
          />
        </template>
        <template v-else-if="column.key === 'qtyPerPack'">
          {{ record.qtyPerPack.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'totalQty'">
          {{ record.totalQty.toFixed(2) }}
        </template>
        <template v-else-if="column.key === 'price'">
          {{ record.price.toFixed(2) }}
        </template>
      </template>
    </BasicTable>
    <div class="md:flex enter-y" id="total-price-box">
      <div class="md:w-4/5 w-full !md:mt-0 !md:mr-4"> Total Harga: </div>
      <div class="md:w-1/5 w-full !md:mt-0 !md:mr-4" id="total-price-amount">
        {{ totalPriceData }}
      </div>
    </div>
    <div class="py-4 px-6" id="additional-info">
      <div class="info-title">Keterangan:</div>
      <div>{{ additionalInfoData }}</div>
    </div>
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
    QtyOrderCell,
  } from '/@/views/components/DetailTemplates';
  import {
    orderInfoSchema,
    orderInfoData,
    supplierData,
    supplierSchema,
    totalPriceData,
    additionalInfoData,
    documents,
  } from './hard-code-materials/descData';
  import { Description } from '/@/components/Description';

  const columns: BasicColumn[] = [
    {
      title: 'Kode Barang',
      key: 'code',
      width: 150,
    },
    {
      title: 'Kapasitas/Barcode',
      dataIndex: 'capacityAndBarcode',
      width: 150,
    },
    {
      title: 'Nama Barang',
      key: 'itemName',
      width: 240,
    },
    {
      title: 'Qty Order',
      key: 'orderQuantity',
      width: 120,
    },
    {
      title: 'Qty/Pack',
      key: 'qtyPerPack',
      width: 80,
    },
    {
      title: 'Total Qty',
      key: 'totalQty',
      width: 80,
    },
    {
      title: 'Harga Unit',
      key: 'price',
      width: 100,
    },
  ];

  export default defineComponent({
    components: {
      Description,
      CollapseContainer,
      BasicTable,
      ItemCodeCell,
      ItemNameCell,
      QtyOrderCell,
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
        orderInfoData,
        orderInfoSchema,
        supplierData,
        supplierSchema,
        totalPriceData,
        additionalInfoData,
        documents,
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

  #total-price-box {
    padding: 8px;
    font-size: 16px;
    text-align: right;
  }

  #total-price-amount {
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