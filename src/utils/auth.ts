import router from '@/router'
import {useUserStore} from "@/stores/UserStore";


router.beforeEach((to, from) => {
  const userStore = useUserStore()
  // 进入管理端进行校验
  if (to.path.includes('manage')
    && userStore.getUserRole() !== 'admin'
    && to.name !== 'login') {
    return { name: 'login', query: {'redirect': to.path} }
  }
})
