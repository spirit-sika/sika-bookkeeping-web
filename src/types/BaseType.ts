export interface BaseResponse<T> {
  code: number,
  message: string,
  data: T
}

export interface BaseQuery {
  pageNum: number
  pageSize: number
  orderBy?: string
  isDesc?: boolean
}

export interface PageVO<T> {
  pageNum: number
  pageSize: number
  totalCount: number
  totalPages: number
  list: Array<T>
}
