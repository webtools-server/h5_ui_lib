<template>
  <div v-show="open" class="ui-toast ui-toast--no-overlay">
    <div class="ui-toast__content">
      <div class="ui-spinner">
        <span v-show="isLoading"
          class="ui-spinner__icon"
          :class="iconClass"></span>
        <p class="ui-toast__text" v-html="msg"></p>
      </div>
    </div>
  </div>
</template>

<script>
import PopMixin from '@jyb/ui-vue-overlay';

export default {
    name: 'vue-tips',
    mixins: [ PopMixin ],
    props: {
      msg: {
        type: String,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
      iconClass: {
        type: String,
        default: 'ui-spinner__icon--svg'
      }
    }
}
</script>