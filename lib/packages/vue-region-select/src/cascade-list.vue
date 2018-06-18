<template>
  <div  v-if="!item.children" class="ui-region-select__list">
    <ui-cascade-item v-for="item in data"
      :active=""
      :disabled=""
      @click="change(item, depth)"
    >{{ item.text }}</ui-cascade-item>    
  </div>
  <ui-cascade-list v-else 
    :data="item.children"
    :depth="depth + 1"
  ></ui-cascade-list>
</template>

<script>
import CascadeItem from './cascade-item.vue';

export default {
  name: 'ui-cascade-list',
  props: {
    data: {
      type: Array,
    },
    tag: {
      type: String,
      default: 'ul'
    },
    depth: {
      type: Number,
      default: 0,
    }
  },
  components: {
    [CascadeItem.name]: CascadeItem,
  },
  methods: {
    change(item, depth) {

    }
  }
}
</script>
