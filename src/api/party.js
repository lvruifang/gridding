import request from '@/utils/request'

//智慧党建获取组织架构列表 （用在左侧组织架构菜单）
export const getMenuInfo = () =>{
    return request({
        method:'get',
        url:'home/Party/getMenuInfo',
    })
}

//智慧党建获取组织架构人员列表  
export const organizationStructureMemberList = (data) =>{
    return request({
        method:'get',
        url:'home/Party/getOrganizationStructureMemberList?id=' + data.id + '&page_size=' + data.page_size + '&page=' + data.page, 
    })
}

//智慧党建获取组织架构人员详细信息
export const getOrganizationStructureMemberInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getOrganizationStructureMemberInfo?id=' + id , 
    })
}

//智慧党建获取组织架构详情
export const getOrganizationStructureInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getOrganizationStructureInfo?id=' + id , 
    })
}


//智慧党建获取党组织详情 
export const getPartyOrganizationInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getPartyOrganizationInfo?id=' + id , 
    })
}

//智慧党建获取两委干部列表

export const getTwoCommitteesCadreList = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getTwoCommitteesCadreList?id=' + id , 
    })
}


//智慧党建获取两委干部详情 
export const getTwoCommitteesCadreInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getTwoCommitteesCadreInfo?id=' + id , 
    })
}


//智慧党建获取会议列表
export const getMeetingsList = (data) =>{
    return request({
        method:'get',
        url:'home/Party/getMeetingsList?id=' + data.id + '&page_size=' + data.page_size + '&page=' + data.page, 
    })
}


//智慧党建获取会议详情 
export const getMeetingsInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getMeetingsInfo?id=' + id , 
    })
}




//智慧党建获取会议大数据统计

export const getMeetingsBigData = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getMeetingsBigData?id=' + id , 
    })
}

//党员管理
//智慧党建获取党员列表
export const getPartyMemberList = (data) =>{
    return request({
        method:'get',
        url:'home/Party/getPartyMemberList?id=' + data.id + '&page_size=' + data.page_size + '&page=' + data.page, 
    })
}

//智慧党建获取党员详情

export const getPartyMemberInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getPartyMemberInfo?id=' + id , 
    })
}

//智慧党建获取党员大数据统计数据

export const getPartyMemberBigData = (id) =>{
    return request({
        method:'get',
        url:'home/Party/getPartyMemberBigData?id=' + id , 
    })
}