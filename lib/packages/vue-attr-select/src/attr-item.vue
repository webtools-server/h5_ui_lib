<template>
  <div 
    :is="tag"
    :class="classes"
    @click="onItemClick">{{ text }}</div>
</template>

<script>
export default {
  name: 'ui-attr-item', 
  props: {
    value: {
      type: [String, Number],
    },
    text: {
      type: [String, Number],
    },
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
      default: 'ui-chose-list__item--cur'
    },
    disabledClass: {
      type: String,
      default: 'ui-chose-list__item--disabled'
    },
    tag: {
      type: String,
      default: 'li'
    }
  },
  computed: {
    classes() {
      return {
        'ui-chose-list__item': true,
        [this.activeClass]: this.active && !this.disabled,
        [this.disabledClass]: this.disabled,
      }
    }
  },
  methods: {
    onItemClick() {
      if (this.disabled) {
        return
      }

      this.$emit('toggle', !this.active)
    }
  }
  // beforeCreate() {
  //   this.$parent.items.push(this);
  // },
  // beforeDestroy() {
  //   const items = this.$parent.items;
  //   const index = items.indexOf(this);
  //   if (index >= 0) {
  //     items.splice(index, 1);
  //   }
  // }
}
</script>
