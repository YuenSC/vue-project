import { PaymentMethod } from '@/lib/types/enum/PaymentMethod'
import { ShippingMethod } from '@/lib/types/enum/ShippingMethod'
import { ShippingStatus } from '@/lib/types/enum/ShippingStatus'
import type { Product } from '@/lib/types/Product'
import { PaymentStatus } from '../types/enum/PaymentStatus'
import type { ApiPaginatedResponse } from '../types/ApiResponse'
import { SortDirection, type ListQuery } from '../types/ListQuery'

function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}

export const getProducts = async ({
  page = 1,
  limit = 10,
  sortBy = 'orderDate',
  sortDesc = SortDirection.DESC
}: ListQuery) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const productCopies = [...fakeProducts]

  if (sortBy && Object.prototype.hasOwnProperty.call(productCopies[0], sortBy.split('.')[0]))
    productCopies.sort((a, b) => {
      const aValue = getNestedValue(a, sortBy)
      const bValue = getNestedValue(b, sortBy)

      if (sortDesc === SortDirection.DESC) {
        return aValue > bValue ? -1 : 1
      }
      return aValue > bValue ? 1 : -1
    })

  const productInPage = productCopies.slice((page - 1) * limit, page * limit)

  return {
    data: productInPage,
    meta: {
      itemCount: productInPage.length,
      totalItems: productCopies.length,
      itemsPerPage: limit,
      totalPages: Math.ceil(productCopies.length / limit),
      currentPage: page
    }
  } as ApiPaginatedResponse<Product>
}

const generateOrderDate = () => {
  return new Date(new Date().getTime() - Math.floor(Math.random() * 10000000000)).toISOString()
}

export const fakeProducts: Product[] = [
  {
    id: '1',
    orderDate: generateOrderDate(),
    billNo: 'INV-001',
    amount: 12499.99,
    buyer: {
      name: 'John Doe',
      companyName: 'Acme Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.completed,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '2',
    orderDate: generateOrderDate(),
    billNo: 'INV-002',
    amount: 199.5,
    buyer: {
      name: 'Jane Smith',
      companyName: 'Widgets Inc'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: true
    }
  },
  {
    id: '3',
    orderDate: generateOrderDate(),
    billNo: 'INV-003',
    amount: 299.99,
    buyer: {
      name: 'Michael Johnson',
      companyName: 'Gadgets Ltd'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '4',
    orderDate: generateOrderDate(),
    billNo: 'INV-004',
    amount: 149.75,
    buyer: {
      name: 'Emily Davis',
      companyName: 'Novelty Inc'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '5',
    orderDate: generateOrderDate(),
    billNo: 'INV-005',
    amount: 399.99,
    buyer: {
      name: 'David Lee',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: PaymentStatus.rejected,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '6',
    orderDate: generateOrderDate(),
    billNo: 'INV-006',
    amount: 249.99,
    buyer: {
      name: 'Sarah Chen',
      companyName: 'Lifestyle Boutique'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '7',
    orderDate: generateOrderDate(),
    billNo: 'INV-007',
    amount: 399.99,
    buyer: {
      name: 'Mark Thompson',
      companyName: 'Electronics Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '8',
    orderDate: generateOrderDate(),
    billNo: 'INV-008',
    amount: 149.75,
    buyer: {
      name: 'Jessica Lee',
      companyName: 'Crafts Emporium'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '9',
    orderDate: generateOrderDate(),
    billNo: 'INV-009',
    amount: 599.99,
    buyer: {
      name: 'Daniel Patel',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '10',
    orderDate: generateOrderDate(),
    billNo: 'INV-010',
    amount: 199.5,
    buyer: {
      name: 'Olivia Nguyen',
      companyName: 'Homegoods Ltd'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '11',
    orderDate: generateOrderDate(),
    billNo: 'INV-011',
    amount: 299.99,
    buyer: {
      name: 'William Gomez',
      companyName: 'Gadgets Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '12',
    orderDate: generateOrderDate(),
    billNo: 'INV-012',
    amount: 149.75,
    buyer: {
      name: 'Sophia Hernandez',
      companyName: 'Novelty Boutique'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '13',
    orderDate: generateOrderDate(),
    billNo: 'INV-013',
    amount: 399.99,
    buyer: {
      name: 'Ethan Reyes',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '14',
    orderDate: generateOrderDate(),
    billNo: 'INV-014',
    amount: 249.99,
    buyer: {
      name: 'Isabella Diaz',
      companyName: 'Lifestyle Boutique'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '15',
    orderDate: generateOrderDate(),
    billNo: 'INV-015',
    amount: 399.99,
    buyer: {
      name: 'Liam Morales',
      companyName: 'Electronics Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '16',
    orderDate: generateOrderDate(),
    billNo: 'INV-016',
    amount: 149.75,
    buyer: {
      name: 'Mia Rojas',
      companyName: 'Crafts Emporium'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '17',
    orderDate: generateOrderDate(),
    billNo: 'INV-017',
    amount: 599.99,
    buyer: {
      name: 'Noah Mendoza',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '18',
    orderDate: generateOrderDate(),
    billNo: 'INV-018',
    amount: 199.5,
    buyer: {
      name: 'Emma Sanchez',
      companyName: 'Homegoods Ltd'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '19',
    orderDate: generateOrderDate(),
    billNo: 'INV-019',
    amount: 299.99,
    buyer: {
      name: 'Lucas Vargas',
      companyName: 'Gadgets Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '20',
    orderDate: generateOrderDate(),
    billNo: 'INV-020',
    amount: 149.75,
    buyer: {
      name: 'Isabela Ramirez',
      companyName: 'Novelty Boutique'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '21',
    orderDate: generateOrderDate(),
    billNo: 'INV-021',
    amount: 399.99,
    buyer: {
      name: 'Mateo Fernandez',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '22',
    orderDate: generateOrderDate(),
    billNo: 'INV-022',
    amount: 249.99,
    buyer: {
      name: 'Sophia Castillo',
      companyName: 'Lifestyle Boutique'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '23',
    orderDate: generateOrderDate(),
    billNo: 'INV-023',
    amount: 399.99,
    buyer: {
      name: 'Alejandro Guzman',
      companyName: 'Electronics Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '24',
    orderDate: generateOrderDate(),
    billNo: 'INV-024',
    amount: 149.75,
    buyer: {
      name: 'Isabella Flores',
      companyName: 'Crafts Emporium'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '25',
    orderDate: generateOrderDate(),
    billNo: 'INV-025',
    amount: 599.99,
    buyer: {
      name: 'Santiago Reyes',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '26',
    orderDate: generateOrderDate(),
    billNo: 'INV-026',
    amount: 199.5,
    buyer: {
      name: 'Emma Gomez',
      companyName: 'Homegoods Ltd'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '27',
    orderDate: generateOrderDate(),
    billNo: 'INV-027',
    amount: 299.99,
    buyer: {
      name: 'Liam Ramirez',
      companyName: 'Gadgets Corp'
    },
    payment: {
      status: PaymentStatus.authorized,
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: false
    }
  },
  {
    id: '28',
    orderDate: generateOrderDate(),
    billNo: 'INV-028',
    amount: 149.75,
    buyer: {
      name: 'Olivia Diaz',
      companyName: 'Novelty Boutique'
    },
    payment: {
      status: PaymentStatus.pending,
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  }
]
