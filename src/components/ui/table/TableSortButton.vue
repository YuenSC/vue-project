<!-- SortButton.vue -->
<script setup lang="ts">
import { SortDirection, type ListQuery } from '@/lib/types/ListQuery'
import { defineEmits, defineProps } from 'vue'
import Button from '../button/Button.vue'

defineProps<{
  columnId: string
  listQuery?: ListQuery
  onUpdateSort: (payload: { sortBy: string; sortDirection: SortDirection }) => void
}>()

const emits = defineEmits(['updateSort'])
</script>

<template>
  <span class="ml-2">
    <Button
      v-if="listQuery?.sortBy !== columnId"
      variant="ghost"
      size="icon"
      class="rounded-full w-8 h-8"
      @click="() => emits('updateSort', { sortBy: columnId, sortDirection: SortDirection.ASC })"
    >
      <span class="pi pi-sort"></span>
    </Button>

    <Button
      v-if="listQuery?.sortBy === columnId && listQuery.sortDirection === SortDirection.ASC"
      variant="ghost"
      size="icon"
      class="rounded-full w-8 h-8"
      @click="() => emits('updateSort', { sortBy: columnId, sortDirection: SortDirection.DESC })"
    >
      <span class="pi pi-sort-up"></span>
    </Button>

    <Button
      v-if="listQuery?.sortBy === columnId && listQuery.sortDirection === SortDirection.DESC"
      variant="ghost"
      size="icon"
      class="rounded-full w-8 h-8"
      @click="() => emits('updateSort')"
    >
      <span class="pi pi-sort-down"></span>
    </Button>
  </span>
</template>
