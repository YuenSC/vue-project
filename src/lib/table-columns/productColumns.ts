import type { ColumnDef } from '@tanstack/vue-table'
import type { Product } from '../types/Product'

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
    header: 'Payment Status',
    cell: ({ getValue }) => {
      const { method, status } = getValue() as Product['payment']
      return `${method} / ${status}`
    }
  },
  {
    accessorKey: 'shipping',
    header: 'Delivery Status',
    cell: ({ getValue }) => {
      const { isOkForDispatch, method, status } = getValue() as Product['shipping']
      return `${method} / ${status} / ${isOkForDispatch ? 'Ready' : 'Not Ready'}`
    }
  }
]
