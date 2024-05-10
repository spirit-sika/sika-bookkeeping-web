import {onMounted, ref} from 'vue'
import {type CaptchaVO, DeviceType, type LoginDTO} from "@/types/UserType";
import {getCaptchaAPI, loginAPI} from "@/api/LoginAPI";
import {useUserStore} from '@/stores/UserStore';
import {ElMessage} from 'element-plus'
import {useRouter} from "vue-router";

export const useLoginHook = () => {
  const router = useRouter();
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
      router.push('/manage').then(()=> {
        ElMessage({
          message: '登录成功.',
          type: 'success',
        })
      })
    }
    else {
      getCaptcha()
    }
  }


  onMounted(()=>{
    getCaptcha()
  })


  return {
    loginDTO,
    captchaVO,
    handleLogin,
    getCaptcha
  }
}
