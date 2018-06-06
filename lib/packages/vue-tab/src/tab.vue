<template>
  <div class="ui-tab">
    <div class="ui-tab__bar" :class="classes"><slot name="bar"></slot></div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-tab',
  props: {
    border: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        "ui-tab-bar--border": this.border,
      }
    }
  }
}
</script>

