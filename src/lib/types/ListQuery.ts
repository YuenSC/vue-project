export interface ListQuery {
  limit?: number
  page?: number
  sortBy?: string
  sortDesc?: SortDirection
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}
