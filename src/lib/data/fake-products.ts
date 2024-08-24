import { PaymentMethod } from '@/lib/types/enum/PaymentMethod'
import { ShippingMethod } from '@/lib/types/enum/ShippingMethod'
import { ShippingStatus } from '@/lib/types/enum/ShippingStatus'
import type { Product } from '@/lib/types/Product'

export const fakeProducts: Product[] = [
  {
    id: '1',
    orderDate: '2023-06-15',
    billNo: 'INV-001',
    amount: 12499.99,
    buyer: {
      name: 'John Doe',
      companyName: 'Acme Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.completed,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '2',
    orderDate: '2023-07-01',
    billNo: 'INV-002',
    amount: 199.5,
    buyer: {
      name: 'Jane Smith',
      companyName: 'Widgets Inc'
    },
    payment: {
      status: 'Pending',
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  },
  {
    id: '3',
    orderDate: '2023-07-20',
    billNo: 'INV-003',
    amount: 299.99,
    buyer: {
      name: 'Michael Johnson',
      companyName: 'Gadgets Ltd'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '4',
    orderDate: '2023-08-01',
    billNo: 'INV-004',
    amount: 149.75,
    buyer: {
      name: 'Emily Davis',
      companyName: 'Novelty Inc'
    },
    payment: {
      status: 'Paid',
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
    orderDate: '2023-08-10',
    billNo: 'INV-005',
    amount: 399.99,
    buyer: {
      name: 'David Lee',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: 'Pending',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '6',
    orderDate: '2023-06-16',
    billNo: 'INV-006',
    amount: 249.99,
    buyer: {
      name: 'Sarah Chen',
      companyName: 'Lifestyle Boutique'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: true
    }
  },
  {
    id: '7',
    orderDate: '2023-07-02',
    billNo: 'INV-007',
    amount: 399.99,
    buyer: {
      name: 'Mark Thompson',
      companyName: 'Electronics Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '8',
    orderDate: '2023-07-21',
    billNo: 'INV-008',
    amount: 149.75,
    buyer: {
      name: 'Jessica Lee',
      companyName: 'Crafts Emporium'
    },
    payment: {
      status: 'Pending',
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
    orderDate: '2023-08-02',
    billNo: 'INV-009',
    amount: 599.99,
    buyer: {
      name: 'Daniel Patel',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '10',
    orderDate: '2023-08-11',
    billNo: 'INV-010',
    amount: 199.5,
    buyer: {
      name: 'Olivia Nguyen',
      companyName: 'Homegoods Ltd'
    },
    payment: {
      status: 'Paid',
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
    orderDate: '2023-06-17',
    billNo: 'INV-011',
    amount: 299.99,
    buyer: {
      name: 'William Gomez',
      companyName: 'Gadgets Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '12',
    orderDate: '2023-07-03',
    billNo: 'INV-012',
    amount: 149.75,
    buyer: {
      name: 'Sophia Hernandez',
      companyName: 'Novelty Boutique'
    },
    payment: {
      status: 'Pending',
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
    orderDate: '2023-07-22',
    billNo: 'INV-013',
    amount: 399.99,
    buyer: {
      name: 'Ethan Reyes',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '14',
    orderDate: '2023-08-03',
    billNo: 'INV-014',
    amount: 249.99,
    buyer: {
      name: 'Isabella Diaz',
      companyName: 'Lifestyle Boutique'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: true
    }
  },
  {
    id: '15',
    orderDate: '2023-08-12',
    billNo: 'INV-015',
    amount: 399.99,
    buyer: {
      name: 'Liam Morales',
      companyName: 'Electronics Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '16',
    orderDate: '2023-06-18',
    billNo: 'INV-016',
    amount: 149.75,
    buyer: {
      name: 'Mia Rojas',
      companyName: 'Crafts Emporium'
    },
    payment: {
      status: 'Pending',
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
    orderDate: '2023-07-04',
    billNo: 'INV-017',
    amount: 599.99,
    buyer: {
      name: 'Noah Mendoza',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '18',
    orderDate: '2023-07-23',
    billNo: 'INV-018',
    amount: 199.5,
    buyer: {
      name: 'Emma Sanchez',
      companyName: 'Homegoods Ltd'
    },
    payment: {
      status: 'Paid',
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
    orderDate: '2023-08-04',
    billNo: 'INV-019',
    amount: 299.99,
    buyer: {
      name: 'Lucas Vargas',
      companyName: 'Gadgets Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '20',
    orderDate: '2023-08-13',
    billNo: 'INV-020',
    amount: 149.75,
    buyer: {
      name: 'Isabela Ramirez',
      companyName: 'Novelty Boutique'
    },
    payment: {
      status: 'Pending',
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
    orderDate: '2023-06-19',
    billNo: 'INV-021',
    amount: 399.99,
    buyer: {
      name: 'Mateo Fernandez',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '22',
    orderDate: '2023-07-05',
    billNo: 'INV-022',
    amount: 249.99,
    buyer: {
      name: 'Sophia Castillo',
      companyName: 'Lifestyle Boutique'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.payme
    },
    shipping: {
      status: ShippingStatus.processing,
      method: ShippingMethod.pickup,
      isOkForDispatch: true
    }
  },
  {
    id: '23',
    orderDate: '2023-07-24',
    billNo: 'INV-023',
    amount: 399.99,
    buyer: {
      name: 'Alejandro Guzman',
      companyName: 'Electronics Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '24',
    orderDate: '2023-08-05',
    billNo: 'INV-024',
    amount: 149.75,
    buyer: {
      name: 'Isabella Flores',
      companyName: 'Crafts Emporium'
    },
    payment: {
      status: 'Pending',
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
    orderDate: '2023-08-14',
    billNo: 'INV-025',
    amount: 599.99,
    buyer: {
      name: 'Santiago Reyes',
      companyName: 'Tech Solutions'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.hsbc
    },
    shipping: {
      status: ShippingStatus.cancelled,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '26',
    orderDate: '2023-06-20',
    billNo: 'INV-026',
    amount: 199.5,
    buyer: {
      name: 'Emma Gomez',
      companyName: 'Homegoods Ltd'
    },
    payment: {
      status: 'Paid',
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
    orderDate: '2023-07-06',
    billNo: 'INV-027',
    amount: 299.99,
    buyer: {
      name: 'Liam Ramirez',
      companyName: 'Gadgets Corp'
    },
    payment: {
      status: 'Paid',
      method: PaymentMethod.fps
    },
    shipping: {
      status: ShippingStatus.readyToDeliver,
      method: ShippingMethod.delivery,
      isOkForDispatch: true
    }
  },
  {
    id: '28',
    orderDate: '2023-07-25',
    billNo: 'INV-028',
    amount: 149.75,
    buyer: {
      name: 'Olivia Diaz',
      companyName: 'Novelty Boutique'
    },
    payment: {
      status: 'Pending',
      method: PaymentMethod.applePay
    },
    shipping: {
      status: ShippingStatus.unsettled,
      method: ShippingMethod.pickup,
      isOkForDispatch: false
    }
  }
]
