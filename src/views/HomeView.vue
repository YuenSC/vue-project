<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import { fakeProducts } from '@/lib/data/fake-products'
import { productColumns } from '@/lib/table-columns/productColumns'
import type { Product } from '@/lib/types/Product'
import { ref } from 'vue'

const products = ref<Product[]>(fakeProducts)
</script>

<template>
  <main class="border p-4">
    <DataTable :columns="productColumns" :data="products" />
  </main>
</template>
