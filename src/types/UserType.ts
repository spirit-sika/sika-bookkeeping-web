import type { BaseQuery } from "./BaseType"

export interface StatusQuery extends BaseQuery {
  status: number
}

export interface LoginDTO {
  phone: string
  password: string
  codeKey: string
  code: string
  deviceType: DeviceType
  rememberMe: boolean
}

export enum DeviceType {
  PC,
  APP,
  MINI_PROGRAM,
  WEB
}

export interface LoginVO {
  nickname: string
  sex: number
  avatar: string
  token: string
  role: string
}


export interface CaptchaVO {
  codeKey: string
  base64: string
}


export interface RegisterDTO {
  phone: string
  password?: string
  sex?: number
  email?: string
  nickname: string
}
