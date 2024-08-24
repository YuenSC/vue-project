export interface ApiPaginatedResponse<T> {
  data: T[]
  meta: PaginationMeta
}

export type PaginationMeta = {
  itemCount: number
  totalItems: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}
