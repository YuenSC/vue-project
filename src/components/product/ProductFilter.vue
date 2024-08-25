<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { PaymentMethod } from '@/lib/types/enum/PaymentMethod'
import { PaymentStatus } from '@/lib/types/enum/PaymentStatus'
import { ShippingStatus } from '@/lib/types/enum/ShippingStatus'
import { cn } from '@/lib/utils'
import { reactive, ref } from 'vue'
import { useRoute, useRouter, type LocationQueryValue } from 'vue-router'
import DateRangePicker from '../DateRangePicker.vue'
import Button from '../ui/button/Button.vue'
import Input from '../ui/input/Input.vue'
import Label from '../ui/label/Label.vue'

const isOpen = ref(true)

const route = useRoute()
const router = useRouter()

const isEnumValue = <T extends object>(enumObj: T, value: any): value is T[keyof T] => {
  return Object.values(enumObj).includes(value)
}

const getFirstQuery = <T,>(
  value: LocationQueryValue | LocationQueryValue[],
  enumObj?: T
): T[keyof T] | string | undefined => {
  const firstValue = Array.isArray(value) ? value[0] : value
  if (enumObj) {
    return isEnumValue(enumObj, firstValue) ? (firstValue as T[keyof T]) : undefined
  }
  return firstValue || undefined
}

const formatFormData = (formData: Record<string, string | number | undefined>) => {
  const query: Record<string, string | undefined> = {}
  for (const key in formData) {
    if (formData[key] !== undefined) {
      query[key] = formData[key].toString().trim() || undefined
    }
  }
  return query
}

const formData = reactive({
  billNo: getFirstQuery(route.query.billNo),
  buyer: getFirstQuery(route.query.buyer),
  contactNumber: getFirstQuery(route.query.contactNumber),
  email: getFirstQuery(route.query.email),
  deliveryAgentName: getFirstQuery(route.query.deliveryAgentName),
  deliveryStatus: getFirstQuery(route.query.deliveryStatus, ShippingStatus),
  paymentStatus: getFirstQuery(route.query.paymentStatus, PaymentStatus),
  paymentMethod: getFirstQuery(route.query.paymentMethod, PaymentMethod),
  startDate: getFirstQuery(route.query.startDate),
  endDate: getFirstQuery(route.query.endDate)
})

const updateQuery = (e: Event) => {
  e.preventDefault()
  const query = formatFormData(formData)
  router.push({ query: { ...route.query, ...query, page: 1 } })
}
</script>

<template>
  <Collapsible v-model:open="isOpen" class="rounded-sm overflow-hidden">
    <CollapsibleTrigger
      :class="cn('flex p-2 px-4 items-center justify-between bg-gray-200 w-full')"
    >
      <div class="text-gray-700 text-sm font-bold">Search Order</div>
      <i :class="cn('pi text-sm', isOpen ? 'pi-chevron-down' : 'pi-chevron-up')" />
    </CollapsibleTrigger>
    <CollapsibleContent class="border-2 rounded-b-sm p-4">
      <form @submit="updateQuery" class="flex flex-col md:flex-row gap-4">
        <div
          class="min-w-[50%] grid grid-cols-1 md:grid-cols-[auto,1fr,auto,1fr] grid-flow-row items-center gap-x-4 gap-y-2"
        >
          <Label for="billNo" class="text-gray-700 text-nowrap"> Bill No </Label>
          <Input id="billNo" v-model="formData.billNo" placeholder="Enter bill number" />

          <Label for="deliveryAgentName" class="text-gray-700 text-nowrap">
            Delivery Agent's Name
          </Label>
          <Input id="deliveryAgentName" v-model="formData.deliveryAgentName" placeholder="XXX" />

          <Label for="buyer" class="text-gray-700 text-nowrap"> Buyer </Label>
          <Input id="buyer" v-model="formData.buyer" placeholder="Enter Buyer Name" />

          <Select v-model="formData.deliveryStatus">
            <Label for="deliveryAgentName" class="text-gray-700 text-nowrap">
              Delivery Status
            </Label>
            <SelectTrigger>
              <SelectValue placeholder="Select delivery status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="status in Object.values(ShippingStatus)"
                :key="status"
                :value="status"
              >
                {{ status }}
              </SelectItem>
            </SelectContent>
          </Select>

          <Label for="contactNumber" class="text-gray-700 text-nowrap"> Contact Number </Label>
          <Input
            id="contactNumber"
            v-model="formData.contactNumber"
            placeholder="Enter contact number"
          />

          <Select v-model="formData.paymentStatus">
            <Label for="paymentStatus" class="text-gray-700 text-nowrap"> Payment Status </Label>
            <SelectTrigger>
              <SelectValue placeholder="Select payment status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="status in Object.values(PaymentStatus)"
                :key="status"
                :value="status"
              >
                {{ status }}
              </SelectItem>
            </SelectContent>
          </Select>

          <Label for="email" class="text-gray-700 text-nowrap"> Email </Label>
          <Input id="email" v-model="formData.email" placeholder="Enter email" />

          <Select v-model="formData.paymentMethod">
            <Label for="paymentMethod" class="text-gray-700 text-nowrap"> Payment Method </Label>
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="status in Object.values(PaymentMethod)"
                :key="status"
                :value="status"
              >
                {{ status }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="flex flex-col items-start gap-2">
          <div>
            <Label class="block mb-2 text-gray-700">Date Range</Label>
            <DateRangePicker />
          </div>
          <Button type="submit">
            <i class="pi pi-search mr-2"></i>
            Submit</Button
          >
        </div>
      </form>
    </CollapsibleContent>
  </Collapsible>
</template>
