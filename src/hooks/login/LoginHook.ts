import {onMounted, ref} from 'vue'
import {type CaptchaVO, DeviceType, type LoginDTO} from "@/types/UserType";
import {getCaptchaAPI, loginAPI} from "@/api/LoginAPI";
import {useUserStore} from '@/stores/UserStore';
import {ElMessage} from 'element-plus'
import {useRouter, useRoute} from "vue-router";

export const useLoginHook = () => {
  const router = useRouter();
  const route = useRoute();
  const userStore = useUserStore();

  const loginDTO = ref<LoginDTO>({
    phone: '',
    password: '',
    codeKey: '',
    code: '',
    deviceType: DeviceType.WEB,
    rememberMe: false
  })
  const captchaVO = ref<CaptchaVO>({
    codeKey: '',
    base64: ''
  })


  const getCaptcha = async () => {
    const { data } = await getCaptchaAPI()
    captchaVO.value.codeKey = data.codeKey
    loginDTO.value.codeKey = data.codeKey
    captchaVO.value.base64 = data.base64
  }

  const handleLogin = async () => {
    const loginResponse = await loginAPI(loginDTO.value)
    if (loginResponse.code === 200) {
      const {data} = loginResponse
      userStore.setUserVO(data)
      // 没有跳转信息, 跳转首页
      if(route.query.redirect === undefined) {
        router.push('/')
        .then(()=> {
          ElMessage({
            message: '登录成功.',
            type: 'success',
          })
        })
      }
      // 跳转到指定页面
      else {
        if(('' + route.query.redirect).includes('manage')
          && userStore.getUserRole() !== 'admin') {
          ElMessage({
            type: 'error',
            message: '非管理员不能进入管理端'
          })
          router.push('/login').then()
        }
        const target = route.query.redirect
        router.push('' + target)
        .then(()=> {
          ElMessage({
            message: '登录成功.',
            type: 'success',
          })
        })
      }
    }
    else {
      await getCaptcha()
    }
  }


  onMounted(async ()=>{
    await getCaptcha()
  })


  return {
    loginDTO,
    captchaVO,
    handleLogin,
    getCaptcha
  }
}
