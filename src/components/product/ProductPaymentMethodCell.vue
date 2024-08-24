<script setup lang="ts">
import PaymentApplePay from '@/assets/payment-apple-pay.png'
import PaymentFPS from '@/assets/payment-fps.png'
import PaymentHSBC from '@/assets/payment-hsbc.png'
import PaymentPayme from '@/assets/payment-payme.png'
import { PaymentMethod } from '@/lib/types/enum/PaymentMethod'
import type { Product } from '@/lib/types/Product'
import { computed, defineProps } from 'vue'
import ProductPaymentStatusTag from './ProductPaymentStatusTag.vue'

const { method, status } = defineProps<Product['payment']>()

const imgSrc = computed(() => {
  switch (method) {
    case PaymentMethod.applePay:
      return PaymentApplePay
    case PaymentMethod.fps:
      return PaymentFPS
    case PaymentMethod.hsbc:
      return PaymentHSBC
    case PaymentMethod.payme:
      return PaymentPayme
    default:
      return ''
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <img :src="imgSrc" class="max-h-[25px]" />
    <div class="flex flex-wrap content-center gap-x-2 justify-center">
      <ProductPaymentStatusTag :status="status" />
    </div>
  </div>
</template>
