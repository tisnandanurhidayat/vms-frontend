<template>
  <div>{{ toFixedFloat(qtyOrder) }}</div>
  <div>Kemasan</div>
  <div>
    Normal:&nbsp;
    <Tag color="#f25a60">
      <strong>
        {{ qtyNormal }}
      </strong></Tag
    >
  </div>
  <div>
    Gratis:&nbsp;
    <Tag color="#f25a60">
      <strong>
        {{ toFixedFloat(qtyFree) }}
      </strong></Tag
    >
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { propTypes } from '/@/utils/propTypes';
  import { Tag } from 'ant-design-vue';
  import { toFixedFloat } from '../index';

  export default defineComponent({
    name: 'ItemCodeCell',
    components: { Tag },
    props: {
      qtyOrder: propTypes.number.def(0.0),
      qtyNormal: propTypes.string,
      qtyFree: propTypes.number.def(0.0),
    },
    setup(props) {
      return { props, toFixedFloat };
    },
  });
</script>
<style scoped>
  span.ant-tag {
    line-height: 16px;
    padding: 0px 6px;
  }
</style>
