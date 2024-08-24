<!-- SortButton.vue -->
<script setup lang="ts">
import { SortDirection, type ListQuery } from '@/lib/types/ListQuery'
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  columnId: string
  listQuery?: ListQuery
  onUpdateSort: (sortBy: string, sortDirection: SortDirection) => void
}>()

const emits = defineEmits(['updateSort'])

function toggleSort() {
  emits('updateSort', props.columnId)
}
</script>

<template>
  <span class="ml-2">
    <Button
      v-if="listQuery?.sortBy !== columnId"
      variant="ghost"
      size="icon"
      class="rounded-full w-8 h-8"
      @click="toggleSort"
    >
      <span class="pi pi-sort"></span>
    </Button>

    <Button
      v-if="listQuery?.sortBy === columnId && listQuery.sortDirection === SortDirection.ASC"
      variant="ghost"
      size="icon"
      class="rounded-full w-8 h-8"
      @click="toggleSort"
    >
      <span class="pi pi-sort-up"></span>
    </Button>

    <Button
      v-if="listQuery?.sortBy === columnId && listQuery.sortDirection === SortDirection.DESC"
      variant="ghost"
      size="icon"
      class="rounded-full w-8 h-8"
      @click="toggleSort"
    >
      <span class="pi pi-sort-down"></span>
    </Button>
  </span>
</template>
