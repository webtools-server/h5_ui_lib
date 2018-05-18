<template>
  <div class="ui-attr-block">
    <p class="ui-attr-title">{{ title }}</p>
    <ul :is="tag" class="ui-attr-list ui-chose-list__line">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ui-attr-block',
  props: {
    title: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'ul'
    }
  }
}
</script>
