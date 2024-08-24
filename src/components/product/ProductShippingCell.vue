<script setup lang="ts">
import shippingDelivery from '@/assets/shipping-delivery.png'
import shippingPickup from '@/assets/shipping-pickup.png'
import { ShippingMethod } from '@/lib/types/enum/ShippingMethod'
import type { Product } from '@/lib/types/Product'
import { computed, defineProps } from 'vue'
import ProductShippingDispatchBadge from './ProductShippingDispatchBadge.vue'
import ProductShippingStatusTag from './ProductShippingStatusTag.vue'

const { isOkForDispatch, method, status } = defineProps<Product['shipping']>()

const imgSrc = computed(() => {
  switch (method) {
    case ShippingMethod.delivery:
      return shippingDelivery
    default:
      return shippingPickup
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <img :src="imgSrc" class="max-w-[70px]" />
    <div class="flex flex-wrap content-center gap-x-2 justify-center">
      <ProductShippingStatusTag :status="status" />
      <ProductShippingDispatchBadge v-if="isOkForDispatch" />
    </div>
  </div>
</template>
