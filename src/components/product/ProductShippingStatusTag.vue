<script setup lang="ts">
import { ShippingStatus } from '@/lib/types/enum/ShippingStatus'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const { status } = defineProps<{ status: ShippingStatus }>()
const dotColorClass = computed(() => {
  switch (status) {
    case ShippingStatus.processing:
      return 'bg-yellow-500'
    case ShippingStatus.completed:
      return 'bg-green-500'
    case ShippingStatus.unsettled:
      return 'bg-red-500'
    case ShippingStatus.cancelled:
      return 'bg-gray-300'
    case ShippingStatus.readyToDeliver:
      return 'bg-yellow-500'
    default:
      return ''
  }
})
</script>

<template>
  <span class="text-gray-500">
    <span :class="cn('w-2 h-2 mb-[1px] rounded-full inline-block', dotColorClass)" />
    {{ status }}
  </span>
</template>
