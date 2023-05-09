<template>
  <MenuItem :key="itemKey" class="menu-item-dropdown">
    <div class="p-2 ml-5" v-if="docKey === 'invr' || docKey === 'ir'">
      <div>
        <strong>{{ docType }}</strong>
        &nbsp;---&nbsp;{{ docStatus }}
      </div>
      <div>Date:&nbsp;{{ docDate }}</div>
    </div>
    <div class="p-2" v-else>
      <div>
        <strong>{{ docType }}</strong>
        &nbsp;---&nbsp;{{ docStatus }}
      </div>
      <div>Date:&nbsp;{{ docDate }}</div>
      <div v-if="docKey === 'inv0' || docKey === 'inv1'">Accepted:&nbsp;{{ acceptedDate }}</div>
    </div>
  </MenuItem>
</template>
<script lang="ts">
  import { Menu } from 'ant-design-vue';
  import { computed, defineComponent, getCurrentInstance } from 'vue';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'DropDocumentItem',
    components: { MenuItem: Menu.Item },
    props: {
      // eslint-disable-next-line
      docKey: propTypes.string,
      docType: propTypes.string,
      docStatus: propTypes.string,
      docDate: propTypes.string,
      acceptedDate: propTypes.string,
    },
    setup(props) {
      const instance = getCurrentInstance();
      const itemKey = computed(() => props.docKey || instance?.vnode?.props?.key);
      return { itemKey };
    },
  });
</script>
<style scoped>
  .menu-item-dropdown {
    width: 20px;
  }
</style>
