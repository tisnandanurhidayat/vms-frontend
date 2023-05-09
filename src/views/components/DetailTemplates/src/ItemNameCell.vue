<template>
  <div>{{ itemName }}</div>
  <div>
    Sub Code:&nbsp;
    <Tag color="#f25a60">
      <strong>
        {{ sub }}
      </strong>
    </Tag>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { propTypes } from '/@/utils/propTypes';
  import { Tag } from 'ant-design-vue';

  export default defineComponent({
    name: 'ItemNameCell',
    components: { Tag },
    props: {
      itemName: propTypes.string,
      sub: propTypes.string,
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
