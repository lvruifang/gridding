// 请求模块

import router from '@/router'
import axios from 'axios'

const request = axios.create({
    // baseURL: '//dhy.jrckeji.com/api/' //接口的基准路径
    baseURL: '/api/' //接口的基准路径
})
//请求拦截器
// request.interceptors.request.use((config) => {
//     // 
//     // if (localStorage.getItem('token')) {
//     //     config.headers['Authorization'] = localStorage.getItem('token')
//     // }
// })
//响应拦截器
request.interceptors.response.use((response) => {
    if (response.status === 200) {
        let { code } = response.data
       
        switch (code) {
            case 1:
                return Promise.resolve(response.data)
            case 2:
                return Promise.reject(response.data.msg)
            case 3:
                return Promise.reject(response.data.msg)
            default:
                return Promise.reject(response.data.msg)
        }
    }
    if (!response) {
        return Promise.reject('网络错误')
    }
    return Promise.reject('未知错误' + response.status)
})
export default request