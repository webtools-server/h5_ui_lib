<template>
<popup :open="show"
  :title-border=false
  :re-caculate-content-height="false"
  @update:open="onUpdateOpen">
  <div slot='title'>选择所在地区</div>
  <ui-cascade-list slot='content'        
    :lists="lists"
    :maxLevel=4
    :preChosen="chosenRegion"
    @nextLevel="getLevelData"
    @chosen-complete="onChosenComplete">
  </ui-cascade-list>
</popup>
</template>

<script>
import Popup from "@jyb/ui-vue-popup";
import CascadeList from './cascade-list.vue'
export default {
  name: 'ui-region-select',
  components: {
    [Popup.name]: Popup,
    [CascadeList.name]: CascadeList,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    lists: {
      type: Array,
      required: true
    },
    chosenRegion: {
      type: Array,
      default: [],
    }
  },
  methods: {
    getLevelData(level, id) {
      this.$emit('nextLevel', level, id)
    },
    onChosenComplete (chosen) {
      this.$emit('chosen-complete', chosen)
    },
    onUpdateOpen(val) {
      if (!val) {
        this.$emit('close', 'close');
      }
    }
  }
}
</script>