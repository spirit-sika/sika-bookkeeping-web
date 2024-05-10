import request from "@/utils/request";
import type {CaptchaVO, LoginDTO, LoginVO} from "@/types/UserType";

export const getCaptchaAPI = () => {
  return request<CaptchaVO>({
    url: 'user/captcha',
    method: 'GET',
    notAuth: true
  })
}

export const loginAPI = (loginDTO:LoginDTO) => {
  return request<LoginVO>({
    url: 'user/login',
    method: 'POST',
    data: loginDTO,
    notAuth: true
  })
}

export const logoutAPI = () => {
  return request({
    url: 'user/logout',
    method: 'POST'
  })
}
