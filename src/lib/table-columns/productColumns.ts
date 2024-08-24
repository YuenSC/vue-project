import type { ColumnDef } from '@tanstack/vue-table'
import type { Product } from '../types/Product'
import { h } from 'vue'
import ProductPaymentMethodCell from '@/components/product/ProductPaymentMethodCell.vue'
import ProductShippingCell from '@/components/product/ProductShippingCell.vue'

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'orderDate',
    header: 'Order Date'
  },
  {
    accessorKey: 'billNo',
    header: 'Bill No'
  },
  {
    accessorKey: 'amount',
    header: 'Total Amount',
    cell: ({ getValue }) => {
      return `HKD ${Number(getValue()).toLocaleString()}`
    }
  },
  {
    accessorKey: 'buyer',
    header: 'Buyer',
    cell: ({ getValue }) => {
      const { companyName, name } = getValue() as Product['buyer']
      return `${companyName} / ${name}`
    }
  },
  {
    accessorKey: 'payment',
    header: () => h('div', { class: 'flex justify-center' }, 'Payment Method'),
    cell: ({ getValue }) => h(ProductPaymentMethodCell, getValue() as Product['payment'])
  },
  {
    accessorKey: 'shipping',
    header: () => h('div', { class: 'flex justify-center' }, 'Delivery Status'),
    cell: ({ getValue }) => h(ProductShippingCell, getValue() as Product['shipping'])
  }
]
