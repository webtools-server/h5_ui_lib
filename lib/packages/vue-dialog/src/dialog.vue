<template>
  <div ref="popup" v-if="open" class="ui-dialog">
    <div v-if="title" class="ui-dialog__title">
      {{ title }}
      <span class="ui-dialog__fn-wrap" v-if="showClose" @click="close"><i class="ui-icon-close"></i></span>
    </div>
    <div class="ui-dialog__content">
      <slot name="content"></slot>
    </div>
    <div v-if="$slots.buttons" class="ui-dialog__footer">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script>
import PopMixin from '@jyb/ui-vue-overlay'
export default {
  name: 'ui-dialog',
  mixins: [ PopMixin ],
  props: {
    title: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    close: function () {
      this.$emit('update:open', false)
    }
  }
}
</script>