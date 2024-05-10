import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
import type {LoginVO} from "@/types/UserType";

export const useUserStore = defineStore('user', ()=> {
    const userVO = ref<LoginVO>({
        nickname:'',
        sex: 0,
        token:'',
        avatar:''
    });

    /**
     * 通过用户登录的响应信息设置state的loginVO
     * @param loginInfo 用户登录的响应信息对象LoginVO
     */
    const setUserVO = (loginInfo: LoginVO): void => {
        userVO.value.nickname = loginInfo.nickname;
        userVO.value.sex = loginInfo.sex;
        userVO.value.token = loginInfo.token;
        userVO.value.avatar = loginInfo.avatar;
    }

    /**
     * 获取整个用户的vo对象
     */
    const getUserVO = () => {
        return userVO.value
    }

    /**
     * 获取用户token
     */
    const getUserToken = () => {
        return userVO.value.token
    }

    /**
     * 获取用户昵称
     */
    const getUserNickname = () => {
        return userVO.value.nickname
    }

    /**
     * 获取用户性别
     */
    const getUserSex = () => {
        return userVO.value.sex
    }

    /**
     * 检查是否存在登录状态, 未登录时返回false
     */
    const notLogin = () => {
        return userVO.value.token === undefined
          || userVO.value.token === ''
          || userVO.value.token.length === 0;
    }

    /**
     * 重置整个state
     */
    const reset = () => {
      userVO.value.nickname=''
      userVO.value.sex= 0
      userVO.value.token=''
      userVO.value.avatar=''
    }

    /**
     * 将性别转为可视化文字
     */
    const visualSex = computed(()=>{
        switch (userVO.value.sex) {
            case 1: return "男";
            case 2: return "女";
            default: return "未知";
        }
    })

    return {
        userVO,
        setUserVO,
        getUserVO,
        getUserToken,
        getUserNickname,
        getUserSex,
        reset,
        notLogin,
        visualSex
    }
}, {
    persist: true
})
