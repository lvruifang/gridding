import request from '@/utils/request'

//智慧防疫获取左侧菜单
export const getMenuInfo = () =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getMenuInfo',
    })
}


//智慧防疫获取流动人员大数据统计
export const getMobilityPersonnelBigData = () =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getMobilityPersonnelBigData',
    })
}


//智慧防疫获取流动人员列表
export const getMobilityPersonnelList = (data) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getMobilityPersonnelList?page=' + data.page + '&page_size=' + data.page_size , 
    })
}

//智慧防疫获取流动人员数据研判信息
export const getMobilityPersonnelAnalysis = () =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getMobilityPersonnelAnalysis',
    })
}





//智慧防疫获取重点防疫点大数据统计
export const getEpKeyAreaBigData = () =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getEpKeyAreaBigData',
    })
}


//智慧防疫获取重点防疫点列表
export const getEpKeyAreaList = (data) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getEpKeyAreaList?page=' + data.page + '&page_size=' + data.page_size , 
    })
}


//智慧防疫获取重点防疫点详情

export const getEpKeyAreaInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getEpKeyAreaInfo?id=' + id,
    })
}


//智慧防疫获取哨点医生列表
export const getSentinelDoctorList = (data) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getSentinelDoctorList?id=' + data.id + '&page_size=' + data.page_size + '&page=' + data.page, 
    })
}


//智慧防疫获取流调队伍成员列表
export const getFlowTeamMemberList = (data) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getFlowTeamMemberList?id=' + data.id + '&page_size=' + data.page_size + '&page=' + data.page, 
    })
}


//智慧防疫获取疫苗接种大数据统计 
export const getVaccineBigData = () =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getVaccineBigData',
    })
}

//智慧防疫获取疫苗接种信息列表
export const getVaccineList = () =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getVaccineList',
    })
}

//智慧防疫获取疫苗接种详情
export const getVaccineInfo = (id) =>{
    return request({
        method:'get',
        url:'/home/Antiepidemic/getVaccineInfo?id=' + id,
    })
}

//智慧防疫获取核酸采集点列表

export const getNucleicAcidTestPointList = (data) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getNucleicAcidTestPointList?page=' + data.page + '&page_size=' + data.page_size , 
    })
}


//智慧防疫获取三道防线详情
export const getThreeDefenseLineInfo = (id) =>{
    return request({
        method:'get',
        url:'home/Antiepidemic/getThreeDefenseLineInfo?id=' + id,
    })
}