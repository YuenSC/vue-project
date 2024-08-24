<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import { getProducts } from '@/lib/data/fake-products'
import { productColumns } from '@/lib/table-columns/productColumns'
import type { ApiPaginatedResponse } from '@/lib/types/ApiResponse'
import { SortDirection } from '@/lib/types/ListQuery'
import type { Product } from '@/lib/types/Product'
import { onMounted, ref } from 'vue'

const productsApiResponse = ref<ApiPaginatedResponse<Product>>()

onMounted(async () => {
  productsApiResponse.value = await getProducts({
    sortBy: 'buyer.companyName',
    sortDesc: SortDirection.ASC
  })
})
</script>

<template>
  <main class="border p-4 mb-4">
    <div>
      {{ JSON.stringify(productsApiResponse?.meta) }}
    </div>
    <DataTable :columns="productColumns" :data="productsApiResponse?.data ?? []" />
  </main>
</template>
