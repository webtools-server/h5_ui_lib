<template> 
  <input 
    class="ui-file-input" 
    type="file" 
    :multiple="multiple"
    :accept="accept"
    :capture="capture"    
    />
</template>

<script>
import { isIOS } from './util';
export default {
  name: 'ui-file-input',
  props: {
    type: {
      type: String,
      default: 'image'
    },
    multiple: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isIOS,
    }
  },
  computed: {
    accept() {
      if (this.type === 'video') {
        return 'video/*'
      } else {
        return 'image/*'
      }
    },
    capture() {
      if (this.type === 'video') {
        if (this.isIOS) {
          return 'user'
        } else {
          return 'camcorder'
        }
      } else {
        if (this.isIOS) {
          return false
        }

        return 'camera'
      }
    }
  },
  methods: {
    onFileChange(e) {
      this.$emit('change', e);
    }
  }
}
</script>
