<template>
  <div @click="$emit('click')" class="ui-tab__tab-item" :class="classes" :style="style"><slot></slot></div>
</template>

<script>
export default {
  name: 'ui-tab-item',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      default: false,      
    }
  },
  computed: {
    classes() {
      return {
        "ui-tab__tab-item--active": this.isActive,
      }
    },
    style() {
      return {
        'border-bottom': this.borderBottom ? '1px solid #f5f5f5' : 'none',
      }
    }
  }
}
</script>

