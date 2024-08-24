<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef, SortDirection } from '@tanstack/vue-table'
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { type ListQuery } from '@/lib/types/ListQuery'
import TableSortButton from './ui/table/TableSortButton.vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  listQuery?: ListQuery
  isLoading?: boolean
}>()

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel()
})

const router = useRouter()
const route = useRoute()

const updateSort = (payload?: { sortBy: string; sortDirection: SortDirection }) => {
  if (payload == undefined) {
    const query = { ...route.query }
    delete query.sortBy
    delete query.sortDirection
    router.push({
      query: { ...query, page: 1, limit: 10 }
    })
  } else {
    router.push({
      query: { ...route.query, ...payload, page: 1, limit: 10 }
    })
  }
}
</script>

<template>
  <div class="border-t-2">
    <Table>
      <TableHeader>
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <div class="flex justify-between">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />

              <TableSortButton
                v-if="header.column.columnDef.enableSorting"
                :columnId="header.id"
                :listQuery="listQuery"
                @update-sort="updateSort"
              />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="relative">
        <template v-if="isLoading && table.getRowModel().rows?.length">
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-4 rounded-sm aspect-square">
              <span class="pi pi-spin pi-spinner text-2xl text-gray-500"></span>
            </div>
          </div>
        </template>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else-if="isLoading">
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center"> Loading... </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
</template>
