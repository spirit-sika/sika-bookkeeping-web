import request from '@/utils/request';

export const testLoginStatusAPI = () => {
    return request<string>({
        url: 'greeting-auth',
        method: 'GET'
    })
}

export const testAnonymousAPI = () => {
    return request<string>({
        url: 'greeting',
        method: 'GET',
        notAuth: true
    })
}
