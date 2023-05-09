<template>
  <div>{{ itemCode }}</div>
  <div>
    Sub:&nbsp;
    <Tag color="#f25a60">
      <strong>
        {{ sub }}
      </strong></Tag
    >
    Unit:&nbsp;
    <Tag color="#f25a60">
      <strong>
        {{ unit }}
      </strong></Tag
    >
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { propTypes } from '/@/utils/propTypes';
  import { Tag } from 'ant-design-vue';

  export default defineComponent({
    name: 'ItemCodeCell',
    components: { Tag },
    props: {
      itemCode: propTypes.string,
      sub: propTypes.string,
      unit: propTypes.string,
    },
    setup(props) {
      return { props };
    },
  });
</script>
<style scoped>
  span.ant-tag {
    line-height: 16px;
    padding: 0px 6px;
  }
</style>
