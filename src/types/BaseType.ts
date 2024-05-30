export interface BaseResponse<T> {
  code: number,
  message: string,
  data: T
}

export interface BaseQuery<T> {
  pageNum: number
  pageSize: number
  orderBy?: string
  isDesc?: boolean
  /* 包含查询信息的实体 */
  data?: T
}

export interface PageVO<T> {
  /* 当前页码 */
  pageNum: number
  /* 页面大小 */
  pageSize: number
  /* 总数据条数 */
  totalCount: number
  /* 总页数 */
  totalPages: number
  /* 数据列表 */
  list: Array<T>
}

export enum StatusEnum {
  ENABLE,
  DISABLE
}
