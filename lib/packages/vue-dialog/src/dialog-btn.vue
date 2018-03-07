<template>
  <span class="ui-dialog__btn" :class="classes" @click="$emit('click')"><slot></slot></span>
</template>

<script>
export default {
  name:'ui-dialog-btn',
  props: {
    strong: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        'ui-dialog__btn--strong': this.strong,
        'ui-dialog__btn--disabled': this.disabled
      }
    }
  }
}
</script>

