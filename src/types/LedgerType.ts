import {StatusEnum} from "@/types/BaseType";

export interface Ledger {
  /* 账本id */
  ledgerId: number;
  /* 账本名称 */
  ledgerName: string;
  /* 账本状态, 0启用, 1冻结(删除) */
  ledgerStatus: number
  createBy: string;
  createTime: Date
  updateBy: string;
  updateTime: Date
}

export interface LedgeQueryDTO {
  ledgerId?: number
  ledgerName?: string
  createTime?: Date
  updateTime?: Date
  username?: string
  status?: StatusEnum
}
