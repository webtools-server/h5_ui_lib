<template>
  <span class="ui-switch-btn" :class="classes" @click="onClick"></span>
</template>

<script>
export default {
  name: 'ui-switch',
  props: {
    on: {
      type: [Number, Boolean, String],
      default: 0,
    }
  },
  computed: {
    classes() {
      return {
        'ui-switch-btn--close': this.on != 1
      }
    }
  },
  methods: {
    onClick() {     
      this.$emit('update:on', this.on == 0 ? 1 : 0);
    }
  }
}
</script>
