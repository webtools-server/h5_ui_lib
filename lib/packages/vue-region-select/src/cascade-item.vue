<template>
  <div :is="tag" 
    class="ui-region-select__list-item"
    :class="classes"
    @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-cascade-item',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: 'ui-region-select__list-item--cur'
    },
    disabledClass: {
      type: String,
      default: 'ui-region-select__list-item--disabled'
    },
    tag: {
      type: String,
      default: 'li'
    },
  },
  computed: {
    classes() {
      return {
        [this.activeClass]: this.active,
        [this.disabledClass]: this.disabled,
      }
    }
  },  
}
</script>