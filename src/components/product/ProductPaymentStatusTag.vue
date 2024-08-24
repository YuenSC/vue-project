<script setup lang="ts">
import { PaymentStatus } from '@/lib/types/enum/PaymentStatus'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const { status } = defineProps<{ status: PaymentStatus }>()
const dotColorClass = computed(() => {
  switch (status) {
    case PaymentStatus.authorized:
      return 'bg-green-500'
    case PaymentStatus.manual:
      return 'bg-yellow-500'
    case PaymentStatus.pending:
      return 'bg-yellow-500'
    case PaymentStatus.rejected:
      return 'bg-red-500'
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
