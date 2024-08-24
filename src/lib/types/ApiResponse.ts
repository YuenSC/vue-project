export interface ApiPaginatedResponse<T> {
  data: T[]
  meta: {
    itemCount: number
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}
