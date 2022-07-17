import request from '@/utils/request'

//智慧网格获取所有网格列表
export const gridList = () =>{
    return request({
        method:'get',
        url:'home/Grid/getGridList',
    })
}

//智慧网格获取某个一级网格及其所有二级和三级网格信息
export const oneLevelGridInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Grid/getOneLevelGridInfo?id='+id,
    })
}


//智慧网格根据一级网格id获取大数据统计数据

export const getBigData = (id) =>{
    return request({
        method:'get',
        url:'/home/Grid/getBigData?id='+id,
    })
}

//智慧网格根据一级网格id获取人员列表

export const personnelList = (data) =>{
    return request({
        method:'get',
        url:'/home/Grid/getPersonnelList?id=' + data.id + '&page_size=' + data.page_size + '&page=' + data.page,       
    })
}