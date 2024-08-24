import type { PaymentMethod } from './enum/PaymentMethod'
import type { ShippingMethod } from './enum/ShippingMethod'
import type { ShippingStatus } from './enum/ShippingStatus'

export interface Product {
  id: string
  orderDate: string
  billNo: string
  amount: number
  buyer: {
    name: string
    companyName: string
  }
  payment: {
    status: string
    method: PaymentMethod
  }
  shipping: {
    status: ShippingStatus
    method: ShippingMethod
    isOkForDispatch: boolean
  }
}
