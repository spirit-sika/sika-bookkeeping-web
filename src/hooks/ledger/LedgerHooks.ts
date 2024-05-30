import {getLedgerListAPI} from "@/api/ledger/ledger";
import {onMounted, ref} from "vue";
import type {Ledger} from "@/types/LedgerType";
import type { PageVO } from "@/types/BaseType";

export const useLedgerHooks = () => {
  const ledgerPageInfo = ref<PageVO<Ledger>>()
  const ledgerList = ref<Array<Ledger>>()

  const getLedger = async () => {
    const {data} = await getLedgerListAPI()
    ledgerPageInfo.value = data;
    ledgerList.value = data.list
  }

  onMounted(async () => {
    await getLedger()
  })

  return {
    ledgerPageInfo,
    ledgerList,
    getLedger
  }
}
