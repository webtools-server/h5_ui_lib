<template>
  <transition v-if="transition"
    enter-class="ui-overlay--hidden"
    leave-to-class="ui-overlay--hidden">
    <div class="ui-overlay"
      v-if="show"
      @click="handleClick"
      :style="overlayStyle"
    ></div>
  </transition>
  <div v-else-if="show" class="ui-overlay"
    @click="handleClick"
    :style="overlayStyle"
  ></div> 
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
    },
    opacity: {
      type: Number,
      default: 0.4,
    },
    color: {
      type: String,
      default: '#000'
    },
    zIndex: {
      type: Number,
    },
    transition: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    overlayStyle: function() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'z-index': this.zIndex,
      }
    },
    transitionClasses: function() {
      if (this.transition) {
        return {
          'enter': 'ui-overlay--hidden',
          'leaveTo': 'ui-overlay--hidden'
        }
      }
      else {
        return {
          'enter': '',
          'leaveTo': ''
        }
      }
    }
  },
  methods: {
    handleClick () {
      this.onClick && this.onClick()
    }
  }
}
</script>