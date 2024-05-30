import request from "@/utils/request";
import type {BaseQuery, PageVO} from "@/types/BaseType";
import type {Ledger, LedgeQueryDTO} from "@/types/LedgerType"

export const getLedgerListAPI = (query?: BaseQuery<LedgeQueryDTO>) => {
  return request<PageVO<Ledger>>({
    url: 'ledger/list',
    method: 'GET',
    notAuth: false,
    params: query
  })
}
