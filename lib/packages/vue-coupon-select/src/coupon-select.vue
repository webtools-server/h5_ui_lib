<template>
<div class="ui-coupon-select">
  <popup 
    :transition=true
    :open="show" 
    :showClose="true"
    :titleClass="['ui-coupon-select__title']"
    :contentClass="['ui-coupon-select__content']"
    @update:open="onOpenUpdate">

    <template slot="title">{{title}}</template>

    <div 
      slot="content" 
      class="ui-coupon-select__list">
      <template v-if="!list">
          <slot></slot>
            <div v-if="!hasSlot" class="ui-coupon-select__empty">
                <div class="ui-coupon-select__empty-img"></div>    
                <p class="ui-coupon-select__empty-text">您还没有可用红包哦~</p>
            </div>
            <div v-else class="ui-btn ui-coupon-select__notuse"
                @click="changecoupon('')">{{ notUseDesc }}</div>          
      </template>      
        <template v-else>
            <template v-if="list.length > 0">
                <coupon-item             
                    v-for="item, idx in list" 
                    :key="item.cid"
                    v-bind="item"
                    :selected="item.cid == cid"
                    @click="changecoupon(item)">                
                </coupon-item>

                <div class="ui-btn ui-coupon-select__notuse"
                    @click="changecoupon('')">{{ notUseDesc }}</div>
            </template>
            <div v-else class="ui-coupon-select__empty">
                <div class="ui-coupon-select__empty-img"></div>    
                <p class="ui-coupon-select__empty-text">您还没有可用红包哦~</p>
            </div>
        </template>
    </div>
  </popup>
</div>
</template>

<script>
import Popup from '@jyb/ui-vue-popup';
import CouponItem from './coupon-item.vue'

export default {
    name: 'coupon-select',
    components: {
        Popup,
        CouponItem
    },
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false
        },
        list: {
            type: Array,
            // required: true,
            // default: []
        },
        cid: {
            type: [String, Number],
            default: 0
        },
        title: {
            type: String,
            default: '选择红包/折扣券',
        },
        notUseDesc: {
            type: String,
            default: '不使用，就是任性'
        }
    },
    computed: {
        hasSlot() {
            return this.$slots && this.$slots.default && this.$slots.default.length; 
        }
    },
    methods: {
        onOpenUpdate(val) {
            if (!val) {
                this.closecoupon();
            }
        },
        closecoupon() {
            this.$emit('update:show', false)
        },
        changecoupon(item) {
            if (item && (item.disabled === true || typeof item.disabled === 'undefined')) {
                return 
            }

            this.$emit('update:cid', item.cid || 0)
            this.closecoupon()
        }
    }   
}
</script>