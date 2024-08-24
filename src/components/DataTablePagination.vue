<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { PaginationMeta } from '@/lib/types/ApiResponse'
import { getValidatedListQuery } from '@/lib/types/ListQuery'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{ meta: PaginationMeta }>()

const router = useRouter()
const route = useRoute()

const LIMITS = [25, 50, 100, 150] // Define constants

const pageRef = ref(props.meta.currentPage.toString())

const updatePage = (_page: number | string) => {
  const { page } = getValidatedListQuery({ page: _page as string })
  if (page) {
    pageRef.value = page.toString()
  }
  router.push({
    query: { ...route.query, page }
  })
}

const updateLimit = (limit: number) => {
  router.push({
    query: { ...route.query, limit, page: 1 }
  })
}

watch(
  () => route.query.page,
  (page) => {
    const query = getValidatedListQuery({ page: page as string })
    pageRef.value = query.page?.toString() || '1'
  },
  { immediate: true }
)
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :total="meta.totalItems"
    :sibling-count="1"
    :items-per-page="meta.itemsPerPage"
    :page="parseInt(pageRef)"
    @update:page="updatePage"
    class="flex justify-between items-center"
  >
    <div class="flex gap-2">
      <div class="text-gray-700">Result per page</div>
      <template v-for="(limit, index) in LIMITS" :key="index">
        <Button
          class="p-2 h-5"
          :variant="limit === meta.itemsPerPage ? 'default' : 'outline'"
          @click="updateLimit(limit)"
        >
          {{ limit }}
        </Button>
      </template>
    </div>

    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button
            class="w-10 h-10 p-0"
            :variant="item.value === page ? 'default' : 'outline'"
            @click="updatePage(item.value)"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>

    <Select :model-value="pageRef" @update:model-value="updatePage">
      <div class="flex gap-2 items-center">
        <span class="text-nowrap text-gray-700">Jump to Page</span>
        <SelectTrigger class="max-w-[200px] min-w-[50px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
      </div>
      <SelectContent align="end" class="min-w-0">
        <SelectItem v-for="page in meta.totalPages" :key="page" :value="page.toString()">
          {{ page }}
        </SelectItem>
      </SelectContent>
    </Select>
  </Pagination>
</template>
