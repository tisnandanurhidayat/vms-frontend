<template>
  <Dropdown placement="bottomLeft" :overlayClassName="`dropdown-overlay`">
    <a-button :type="'secondary'" class="ml-2 btn">Dokumen</a-button>
    <template #overlay>
      <Menu @click="handleMenuClick" :forceSubMenuRender="true">
        <!-- <MenuDivider v-if="getShowDoc" /> -->
        <div class="p-3 mr-6">
          <strong>{{ cdt }}</strong>
        </div>
        <template v-for="document in documents" :key="document.key">
          <!-- :docType="docType[document.key]" -->
          <MenuItem
            :docKey="document.docKey"
            :docType="docType[document.docKey]"
            :docStatus="document.status"
            :docDate="document.date"
          />
        </template>
      </Menu>
    </template>
  </Dropdown>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { propTypes } from '/@/utils/propTypes';
  import { router } from '/@/router';

  type MenuEvent = 'po' | 'ra' | 'pfi' | 'inv0' | 'invr' | 'ir' | 'inv1';

  const docType = {
    po: 'PO',
    ra: 'RA',
    pfi: 'PFI',
    inv0: 'INV rev. 0',
    invr: 'INVR',
    ir: 'IR',
    inv1: 'INV rev. 1',
  };

  export default defineComponent({
    name: 'DocumentDropdownButton',
    components: {
      Dropdown,
      Menu,
      MenuItem: createAsyncComponent(
        () => import('/@/views/components/DetailTemplates/src/DropDocumentItem.vue'),
      ),
    },
    props: {
      cdt: propTypes.string,
      documents: propTypes.arrayOf(propTypes.object),
      // raId: propTypes.string,
      // pfiId: propTypes.string,
      // inv0Id: propTypes.string,
      // invrId: propTypes.string,
      // irId: propTypes.string,
      // inv1Id: propTypes.string,
    },
    setup(props) {
      let references = {
        cdt: props.cdt,
        raId: propTypes.string,
        pfiId: propTypes.string,
        inv0Id: propTypes.string,
        invrId: propTypes.string,
        irId: propTypes.string,
        inv1Id: propTypes.string,
      };

      props.documents?.forEach((document) => {
        switch (document.docKey) {
          case 'ra':
            references.raId = document.reference;
            break;
          case 'pfi':
            references.pfiId = document.reference;
            break;
          case 'inv0':
            references.inv0Id = document.reference;
            break;
          case 'invr':
            references.invrId = document.reference;
            break;
          case 'ir':
            references.irId = document.reference;
            break;
          case 'inv1':
            references.inv1Id = document.reference;
            break;
        }
      });

      function handleMenuClick(e: MenuInfo) {
        switch (e.key as MenuEvent) {
          case 'po':
            router.push(`/Po/viewbycdtdetail/${props.cdt}`);
            break;
          case 'ra':
            router.push(`/receiving-advice/detail/${references.raId}`);
            break;
          default: {
            console.log(e.key);
          }
        }
      }
      return {
        handleMenuClick,
        docType,
      };
    },
  });
</script>
