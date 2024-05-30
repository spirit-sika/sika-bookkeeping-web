import type {AxiosRequestConfig} from "axios";
import axios, {type InternalAxiosRequestConfig} from "axios";
import type {BaseResponse} from "@/types/BaseType";
import {useUserStore} from "@/stores/UserStore";
import router from "@/router";
import {ElMessage, ElMessageBox} from 'element-plus'

const userStore = useUserStore();
interface SikaRequestConfig extends AxiosRequestConfig {
  /* 为true时不需要鉴权 */
  notAuth?: boolean
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 3600000
});
instance.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

instance.interceptors.request.use((config:SikaRequestConfig) => {

  // 添加token到请求头中
  if (config.notAuth === undefined || !config.notAuth) {
    const token = userStore.getUserToken()
    console.log('pinia 获取到的token为: ', token)
    // 用户未登录, 没有token信息或者已清楚本地存储, 需要重新登录
    if(typeof token === undefined || token === null || token.length === 0) {
      ElMessageBox({
        title: '身份失效',
        message: '登录信息已过期, 是否重新登录',
        showCancelButton: true,
        confirmButtonText: '重新登录',
        cancelButtonText: '留在页面',
      }).then(action => {
        if (action === 'confirm') {
          // 重新登录
          console.log('页面跳转')
          router.push('/login')
        }
      })
    }
    config.headers!['sika'] = `Bearer ${token}`
  }

  return config as InternalAxiosRequestConfig
})

const request = async <T=any> (config:SikaRequestConfig):Promise<BaseResponse<T>> => {

  const response = await instance.request<BaseResponse<T>>(config)
  // 网络层面错误
  if (response.status !== 200) {
    ElMessage({
      type: 'error',
      message: response.statusText,
    })
    return {
      message: response.statusText,
      code: response.status,
      data: null as T
    }
  }
  // 服务器层面错误
  const {data} = response
  if (data.code !== 200) {
    ElMessage({
      type: 'error',
      message: data.message,
    })
  }

  return response.data

  // // console.log('import.meta.env.BASE_URL is ', import.meta.env.BASE_URL)
  // try {
  //   const {data} = await instance.request<BaseResponse<T>>(config)
  //   if (data.code !== 200) {
  //     ElMessage({
  //       type: 'error',
  //       message: data.message,
  //     })
  //     return data
  //   }
  //   ElMessage({
  //     type: 'success',
  //     message: data.message,
  //   })
  // }
  // catch (err) {
  //   let errorMessage = '请求失败';
  //   if (err instanceof Error) {
  //     errorMessage = err.message || '请求失败'
  //   }
  //   ElMessage({
  //     type: 'error',
  //     message: errorMessage,
  //   })
  //   return {code: 400, message: errorMessage, data: null as any}
  // }

  // return (await instance.request<BaseResponse<T>>(config)).data
}

export default request;
