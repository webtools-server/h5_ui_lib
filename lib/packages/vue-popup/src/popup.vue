<template>
<transition enter-class="ui-slide-up" leave-class="ui-popup--show">
  <div ref="popup" v-if="open" class='ui-popup ui-popup--show'>
    <div class="ui-popup__title" :class="titleClass">
      <slot name="title"></slot>
      <div v-if="showClose" class="ui-popup__fn-button" @click="$emit('update:open', false)"><i class="ui-icon-close"></i></div>
    </div>
    <div class="ui-popup__content" :class="contentClass" :style="contentStyle">
      <slot name="content"></slot>
    </div>
    <div class="ui-popup__footer" :class="footerClass">
      <slot name="footer"></slot>
    </div>        
  </div>
</transition>
</template>

<script>
import PopMixin from '@jyb/ui-vue-overlay';
const showClass = 'ui-popup--show';
const noborderClass = 'ui-popup__title--noborder';

// 浮层高度由内容决定，最高时距离屏幕顶端296px，标题高度为104px
function calcContentHeight() {
  return `${window.innerHeight - ((296 + 104) / 2)}px`;
}

export default {
  name: 'popup',
  mixins: [ PopMixin ], 
  props: {
    showClose: {
      type: Boolean,
      default: true
    },
    titleClass: {
      type: Array,
      default: () => []
    },
    contentClass: {
      type: Array,
    },
    footerClass: {
      type: Array,
    },
    titleBorder: {
      type: Boolean,
      default: true,
    },
    reCaculateContentHeight: {
      type: Boolean,
      default: true,
    }
  },
  created() {
    if (!this.titleBorder) {
      this.titleClass.push(noborderClass);
    }
  },
  data() {
    return {
      contentStyle: {}
    }
  },
  mounted() {
    this.resetContentHeight();
    if (this.reCaculateContentHeight) {
      window.addEventListener('resize', this.resetContentHeight)
    }    
  },
  beforeDestroy() {
    if (this.reCaculateContentHeight) {
      window.removeEventListener('resize', this.resetContentHeight)
    }
  },
  methods: {
    resetContentHeight() {
      this.contentStyle['max-height'] = calcContentHeight();
    }
  }  
}
</script>
