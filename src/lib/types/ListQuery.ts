import type { LocationQuery } from 'vue-router'

export const DEFAULT_LIMIT = 25

export interface ListQuery {
  limit?: number
  page?: number
  sortBy?: string
  sortDirection?: SortDirection
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export const getValidatedListQuery = (query: LocationQuery): ListQuery => {
  const limit = query.limit ? Number(query.limit) : undefined
  const page = query.page ? Number(query.page) : undefined
  const sortBy = query.sortBy ? String(query.sortBy) : undefined
  const sortDirection =
    query.sortDirection === SortDirection.DESC ? SortDirection.DESC : SortDirection.ASC

  return { limit, page, sortBy, sortDirection }
}
