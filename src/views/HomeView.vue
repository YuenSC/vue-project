<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import ProductFilter from '@/components/product/ProductFilter.vue'
import { getProducts } from '@/lib/data/fake-products'
import { productColumns } from '@/lib/table-columns/productColumns'
import type { ApiPaginatedResponse } from '@/lib/types/ApiResponse'
import { getValidatedListQuery } from '@/lib/types/ListQuery'
import type { Product } from '@/lib/types/Product'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const productsApiResponse = ref<ApiPaginatedResponse<Product>>()
const loading = ref(false)

const route = useRoute()

const fetchProducts = async () => {
  loading.value = true
  productsApiResponse.value = await getProducts(getValidatedListQuery(route.query))
  loading.value = false
}

onMounted(() => fetchProducts())
watch(() => route.query, fetchProducts, { deep: true })
</script>

<template>
  <main class="border p-4 mb-4 flex flex-col gap-4">
    <ProductFilter />
    <DataTable
      :columns="productColumns"
      :data="productsApiResponse?.data ?? []"
      :is-loading="loading"
      :list-query="route.query"
      :meta="productsApiResponse?.meta"
    />
  </main>
</template>
