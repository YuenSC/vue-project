<script setup lang="ts">
import { fakeProducts } from '@/data/fake-products'
import type { Product } from '@/types/Product'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { ref } from 'vue'

const products = ref<Product[]>(fakeProducts)
</script>

<template>
  <main class="border p-4">
    <span>Test</span>
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="orderDate" header="Code"></Column>
      <Column field="billNo" header="Name"></Column>
      <Column field="amount" header="Category"></Column>
      <Column field="buyer" header="Quantity"></Column>
      <Column field="payment" header="Quantity"></Column>
      <Column field="shipping" header="Quantity"></Column>
    </DataTable>
  </main>
</template>
