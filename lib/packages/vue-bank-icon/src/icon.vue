<template>
<i :class="[className]"></i>
</template>

<script>
import map from './map';
export default {
  name: 'ui-bank-icon',
  props: ['bankCode'],
  computed: {
    className() {
      return `ui-bank-icon--${map[this.bankCode]}`;
    }
  }
}
</script>
