import request from '@/utils/request'

export const login = (data) =>{
    return request({
        method:'POST',
        url:'home/User/login',
        data:data
    })
}


export const logout = () =>{
    return request({
        method:'get',
        url:'home/User/logout',
      
    }) 
}