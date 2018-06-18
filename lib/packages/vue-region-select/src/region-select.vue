<template>
  <div class="ui-region-select">
    <div class=""></div>
    <div class=""></div>
  </div>
</template>

<script>
import CascadeList from './cascade-list.vue';
export default {
  name: 'ui-region-select',
  components: {
    [CascadeList.name]:  CascadeList,
  }
}
</script>
