<template>
<div>
    <div class="pcr-wrap">
        <div v-for="list, idx in lists"
            v-show="list && list.length !== 0"
            :class="{chosen: true, cur: currentShow === idx}"
            :style="{'max-width': pcrWidth}"            
            @click="togglePrcType(idx)">    
            <span class="text">{{ currentSelect[idx] && currentSelect[idx].name || (currentShow === idx ? '请选择' : '')}}</span>
        </div>
    </div>
    <div class="region-wrap"
        ref="regionWrap"
        :style="{width:wrapWidth}"        
        @transitionend="onTransitionEnd">
        <ul class="pcr-list"                    
            v-for="list, idx in lists"
            :style="{width: innerWidth + 'px', height: getListHeight(idx)}">
            <li v-for="item, index in list"
                :key="item.id"
                :class="{ chosen : isCurrent(idx, item.id) }"
                @click="change(idx, item)">{{ item.name }}
                <i v-if="isCurrent(idx, item.id)" class="icon checked-icon"></i>
            </li>
        </ul>       
    </div>
</div>
</template>

<script>
import { preventDocMove, enableDocMove, getIOSVer } from "./util";
const iosVer = getIOSVer()[0];

export default {
  name: "ui-cascade-list",
  props: {
    lists: {
      type: Array,
      required: true
    },
    maxLevel: {
      type: Number,
      required: true,
      default: 4
    },
    preChosen: {
      type: Array
    }
  },
  data() {
    return {
      currentSelect: (this.preChosen && this.preChosen.slice()) || [],
      currentShow: 0,
      innerWidth: 0,
      animating: false
    };
  },
  computed: {
    wrapWidth: function() {
      return this.innerWidth * this.lists.length + "px";
    },
    itemWidth: function() {
      return this.innerWidth + "px";
    },
    pcrWidth: function() {
      return 100 / this.maxLevel + "%";
    },
    shift: function() {
      return -this.currentShow * this.innerWidth;
    }
  },
  watch: {
    lists(val) {
      const newList = val[this.currentShow + 1];
      if (newList) {
        if (newList.length === 0) {
          this.$emit("chosen-complete", this.currentSelect);
        } else {
          this.currentShow += 1;
          this.reset();
        }
      } else {
        return;
      }
    },
    currentShow(val) {
      this.doAnim();
    }
  },
  methods: {
    reset() {
      for (
        let i = this.currentShow, len = this.currentSelect.length;
        i < len;
        i++
      ) {
        this.currentSelect.splice(i, 1, null);
      }
    },
    togglePrcType(idx) {
      if (idx > 0 && !this.currentSelect[idx - 1]) {
        return;
      }

      this.currentShow = idx;
    },
    isCurrent(idx, id) {
      if (!this.currentSelect[idx]) {
        return false;
      }

      return this.currentSelect[idx].id === id;
    },
    change(idx, item) {
      if (this.animating) {
        return;
      }

      this.currentSelect.splice(idx, 1, item);
      if (idx === this.maxLevel - 1) {
        this.$emit("chosen-complete", this.currentSelect);
      } else {
        this.$emit("nextLevel", idx, item.id);
      }
    },
    doAnim() {
      const el = this.$refs.regionWrap;
      if (el) {
        setTimeout(() => {
          el.scrollTop = 0;
        });

        const list = el.children[this.currentShow];
        if (list) list.scrollTop = 0;

        this.animating = true;
        el.style.webkitTransform = `translateX(${this.shift}px)`;
      }
    },
    getListHeight(idx) {
      if (this.currentShow == idx) {
        if (iosVer == 8) {
          return "6.5rem";
        }

        return "auto";
      }

      return "0px";
    },
    onTransitionEnd() {
      this.animating = false;
    },
    doNothing() {}
  },
  created() {
    this.innerWidth = window.innerWidth;
  }
};
</script>