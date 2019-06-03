<template>
  <div class="ui-attr-select ui-chose-list">
    <ui-attr-block v-for="attr in attrs"
      :title="attr.name">
      <ui-attr-item v-for="a in attr.attr"
        :value="a.item_id"
        :text="a.value"
        :active="isActive(attr.code, a.item_id)"
        :disabled="isDisabled(attr.code, a.item_id)"
        @toggle="onItemToggle(attr.code, a.item_id)"
      ></ui-attr-item>
    </ui-attr-block>
  </div>
</template>

<script>
import AttrBlock from './attr-block.vue';
import AttrItem from './attr-item.vue';
import { getAvailMap, getAttrArr, getAttrStr } from './util';

export default {
  name: 'ui-attr-select',
  components: {
    [AttrBlock.name]: AttrBlock,
    [AttrItem.name]: AttrItem,
  },
  props: {
    attrs: {
      type: Array,
      required: true,
      default: () => [],
    },
    skus: {
      type: Object,
      required: true,
      default: () => {},
    },
    choseArr: {
      type: Array,
    },
    enableCancel: {
      type: Boolean,
      default: true,      
    }
  },
  computed: {
    availMap() {
      return getAvailMap(this.skus);
    },
    chose() {
      return this.attrs.reduce((pv, cv, idx) => {
        pv[cv.code] = this.choseArr[idx];
        return pv;
      }, {});
    }
  },
  methods: {
    onItemToggle(code, val) {  
      if (this.isDisabled(code, val)) {
        return;
      }
      
      if (this.isActive(code, val)) {
        if (this.enableCancel) {
          this.chose[code] = '';
        } 
      } else {
        this.chose[code] = val;
      }
      
      this.updateChose();
    },
    isActive(code, val) {
      return !!(this.chose[code] && this.chose[code] == val);
    },
    isDisabled(code, val) {
      const str = this.getChoseStr(code, val);
      return (!this.availMap[str]) || this.availMap[str] <= 0;
    },
    getChoseStr(code, val) {
      const choseArr = this.attrs.map(i => {
        if (i.code == code) {
          return val; 
        }

        return this.chose[i.code];
      }).filter(i => i);
      return getAttrStr(choseArr);
    },
    updateChose() {
      const values = [];
      const texts = [];

      this.attrs.forEach(i => {
        const attr = i.attr.filter(a => this.chose[i.code] == a.item_id)[0];
        values.push(attr && attr.item_id || '')
        if (attr) {
          texts.push(attr.value);
        }
      })

      this.$emit('update:choseArr', values);
      this.$emit('chose:change', values, texts);
    }
  }
}
</script>