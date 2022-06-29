<template>
    <div class="wrap">
        <div class="left">
            <div class="slide-top">
                <h2>大数据统计分析</h2>
                <div class="item-wrap">
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">5593</p>
                            <p>人口总数</p>
                        </div>
                    </div>
                    <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">1000</p>
                            <p>青少年总数</p>
                        </div>
                    </div>
                     <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">3000</p>
                            <p>特殊人群</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-center">
                <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>特殊人群分析</span></h2>
                <div class="bottom">
                    <special-groups  :data="data5" ></special-groups>
                </div>
            </div>
            <div class="slide-bottom">
                 <h2 :class="['title']"> <img src="@/assets/images/icon9.png" alt=""> <span>重点青少年年龄分布</span></h2>
                 <div class="echart">
                      <adolescent-age :data="data4"></adolescent-age>
                 </div>
            </div>
        </div>
        <div class="center">
            <div class="slide-top">
                <h2 :class="['title']">重点综治区域分布</h2>
                <div class="echart">
                    <key-comprehensive-management :data="data2" ></key-comprehensive-management>
                </div>
             
            </div>
             <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon1.png" alt=""> <span>12月内突出问题数据曲线</span></h2>
                <div class="echart">
                    <problem-data ></problem-data>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="slide-top">
                <h2>实时公告通知</h2>
                <p>社区服务平台以政府引导、企业建设、社会参与、市民受惠为原则，借助荣成“云治理平台”，整合市、区相关部门及本市区各街道公共服务资源，为市民提供了10大特色公共服务项目，其中APP开通了网格服务，形成“云”</p>
            </div>
            <div class="slide-center">
                <h2>
                    <img src="@/assets/images/icon01.png" alt="">
                    <span>重点综治区域突出问题分布</span>
                </h2>
                <div class="echart">
                    <right-center :data="data"></right-center>
                </div>
            </div>
             <div class="slide-bottom">
                <h2>
                    <img src="@/assets/images/icon4.png" alt="">
                    <span>综治队伍分布</span>
                </h2>
                <p>志愿者服务队</p>
                <div class="echart">
                    <comprehensive-management :data="data3"></comprehensive-management>
                </div>
                <p>医生咨询服务队</p>
                <div class="echart">
                    <comprehensive-management :data="data31"></comprehensive-management>
                </div>
                <p>法律咨询服务队</p>
                <div class="echart">
                    <comprehensive-management :data="data32"></comprehensive-management>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import specialGroups from '@/components/bigData/comprehensiveAnalysis/specialGroups'

import rightCenter from "@/components/bigData/comprehensiveAnalysis/rightCenter"
import adolescentAge from "@/components/bigData/comprehensiveAnalysis/adolescentAge"
import comprehensiveManagement from "@/components/bigData/comprehensiveAnalysis/comprehensiveManagement"

import keyComprehensiveManagement from "@/components/bigData/comprehensiveAnalysis/keyComprehensiveManagement"
import problemData from "@/components/bigData/comprehensiveAnalysis/problemData"

export default {
    name: 'comprehensiveAnalysis',

    data() {
        return {

            data5: {
                title: '特殊人群分析',
                data: [
                    {
                        value: 335,
                        name: '艾滋病',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 310,
                        name: '吸毒人员',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 234,
                        name: '社区矫正',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 200,
                        name: '精神病',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                     {
                        value: 200,
                        name: '刑满释放',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    }
                ]
            },
            data6: {
                title: "人口年龄分布",
                data: [300,400,100,60],
                areaNameS: [
                "15-25岁",
                "25-35岁",
                "35-45岁",
                "45以上"
                ]
            },
            data: {
                data:[
                { 
                    value: 35,
                    name: "电信诈骗", 
                    itemStyle: {
                    color: '#e7b41d'
                    } 
                },
                { 
                    value: 40, 
                    name: "赌博" ,
                    itemStyle: {
                    color: '#ff1c4c'
                    } 
                },
                { 
                    value: 55, 
                    name: "盗窃" ,
                    itemStyle: {
                    color: '#0ce6ff'
                    } 
                },
                { 
                    value: 45, 
                    name: "命案" ,
                    itemStyle: {
                    color: '#29a4ff'
                    } 
                },
                { 
                    value: 35, 
                    name: "人口拐卖" ,
                    itemStyle: {
                    color: '#2aeae7'
                    } 
                },
                { 
                    value: 25, 
                    name: "打架斗殴" ,
                    itemStyle: {
                    color: '#774aff'
                    } 
                },
            ]},
            data4:{
                title: '学历结构',
                data: [800,900,750],
                areaNameS: [
                "12岁",
                "15岁",
                "18岁",
                ]
            },
            data3:{
                title:"",
                data:[
                   {
                       value:55,
                        itemStyle: {
                            color: '#7849ff'
                        }
                   }
                ]
            },
             data31:{
                title:"",
                data:[
                   {
                       value:30,
                        itemStyle: {
                            color: '#e4b420'
                        }
                   }
                ]
            },
            data32:{
                title:"",
                data:[
                   {
                       value:15,
                        itemStyle: {
                            color: '#5e81f4'
                        }
                   }
                ]
            },
            data7:{
                title:"",
                data:[
                    {name:"公立医院",value:108},
                    {name:"社区采集点",value:213},
                    {name:"临时采集点",value:128}
                ]
            },
            data8:{
                title:"",
                data:[
                        {
                            value:60,
                            name:'本科',
                            itemStyle: {
                                color: '#0d7db0'
                            }
                        },
                        {
                            value:40, 
                            name:'大专',
                            itemStyle: {
                                color: '#d566d2'
                            }
                        },
                        {
                            value:18, 
                            name:'研究生',
                            itemStyle: {
                                color: '#eedc76'
                            }
                        },
                    ]
            },
             data2: {
                title: '重点综治区域分布',
                data: [
                    {
                        value: 72,
                        name: '娱乐场所',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 50,
                        name: '学校周边',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 40,
                        name: '交通场站',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 30,
                        name: '城乡结合部',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                     {
                        value: 21,
                        name: '集贸市场',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 11,
                        name: '重点线路',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    }
                ]
            },
            data9:{
                title:"",
                data:[{
                        value: 10,
                        name: 'IG'
                    },
                    {
                        value: 5,
                        name: 'SN'
                    },
                    {
                        value: 15,
                        name: 'V5'
                    },
                    {
                        value: 25,
                        name: 'TES'
                    },
                    {
                        value: 20,
                        name: 'JDG'
                    },

                ]
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        specialGroups,
        rightCenter,
        adolescentAge,
        comprehensiveManagement,
        keyComprehensiveManagement,
        problemData
        
    },
};
</script>

<style scoped>

    .wrap{
        display: flex;
        justify-content: space-between;
        padding:0 3.5%;
         width:100%;
    }
    .wrap .left{
        width:26.75%;
        /* border:solid 1px red; */
    }
    .wrap .left .slide-top{
        width:100%;
        height:18%;
        background: url("@/assets/images/leftTop.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:15px;
        mix-blend-mode: screen;  
        position: relative;
        /* padding-top:12%; */
    }
     .wrap .left .slide-top h2{
         color:#49b6db;
     }
    .wrap .left .slide-center,.wrap .right .slide-center{
        width:100%;
        height:38.65%;
         background: url("@/assets/images/leftCenter.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:5%;
         mix-blend-mode: screen;  
        position: relative;
        padding:1px 6% 0;
        
    }
    
    .wrap .left .slide-center .bottom{
        height:95%;
        margin-top:3%;   
       padding:7% 0 5%;
    }
    .wrap .left .slide-top .item-wrap{
        display: flex;
        width:100%;
        padding:11% 0 0 8%;
        height:100%;
        align-items: center;
        justify-content: space-around;

    }
    .wrap .left .slide-top .item{
        width:24%;
        position: relative;
    }
    .wrap .left .slide-top  .jt{
        mix-blend-mode: lighten;  
        width:22px;
        height:39px;
        background:url("@/assets/images/jt.png") no-repeat center center;
        background-size:100% 100%;
    }
    .wrap .left .slide-top .item .num{
        font-size:18px;
        color:#fff;
    }
    .wrap .left .slide-top .item .txt{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size:12px;
        transform: scale(0.9);
        color:#aaddff;
        line-height: 1.3;
    }
    .wrap .left .slide-top .item img{
        width:100%;
        animation: myfirst 15s infinite linear;
    }
    @keyframes myfirst
        {
        to { transform: rotate(-360deg)}
        }
    .wrap .left .slide-top h2{
        left:7%;
        top:7%;
    }
    .wrap .left .slide-bottom,.wrap .right .slide-bottom{
        height:34%;
        background:url("@/assets/images/leftBottom.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen; 
        margin-top:5%;
        position: relative;
        padding-top:15%;
    }
    .wrap .left .slide-center h2 img{
        width:37px;
    }
    .wrap .left .slide-bottom h2 img{
        width:43px;
    }
     .wrap .left .slide-bottom .echart{
         width:90%;
         margin:3% auto 0;
         height:80%; 
     }
     .wrap .right .slide-center .echart{
          width:90%;
         margin:3% auto 0;
         height:88%; 
     }
     .wrap .right .slide-bottom .echart{
          width:80%;
         margin:3% auto 0;
         height:13px; 
     }
    .wrap .right .slide-bottom p{
         width:80%;
         margin:3% auto 0;
    }
    .wrap .right{
        width:25.23%;
        /* border:solid 1px red; */
    }
    .wrap .center{
        width:44.76%;
        /* border:solid 1px red; */
    }
    .wrap .center .slide-top{
        height:53%;
        margin-top:76px;
        background: url("@/assets/images/centerTop.png") no-repeat center center;
        mix-blend-mode: screen;  
        background-size: 100% 100%;
        position: relative;
        padding-top:8%;
    }
    .wrap .center .slide-top h2{
       position: absolute;
       top:9%;
       left:5%;
       font-size:22px;
    }
    .wrap .center .slide-top .echart{
        height:90%;
        overflow: hidden;
         width:100%;
        margin:5% auto;
    }
    .wrap .center .slide-bottom{
        width:100%;
        height:34%;
         background: url("@/assets/images/djCb.png") no-repeat center center;
        mix-blend-mode: screen;  
        background-size: 100% 100%;
        margin-top:15px;
        position: relative;
        padding-top:5%;
    }
    .wrap .center .slide-bottom .echart{
        height:80%;
        width:80%;
        margin:5% auto;
    }
    .wrap .center .slide-bottom h2{
        top:8%;
    }
   .wrap .right .slide-bottom h2 img{
       width:41px;}
.wrap .right .slide-center h2 img{
    width:45px;
}
    .wrap .right .slide-top{
        width:100%;
        height:18%;
        background: url("@/assets/images/rightTop.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:15px;
        mix-blend-mode: screen;  
        position: relative;
        padding-top:13.5%;
    }
    .wrap .right .slide-top h2{
        font-size: 22px;
        color:#49b6db;
        text-align: right;
        line-height: 20%;
        right:10%;
        top:18%;
        left:auto;
    }
    .wrap .right .slide-top p{
       font-size:14px;
       color:#aaddff;
       overflow: hidden;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        padding:0 7% 0 4%;
        line-height: 1.4;
    }
    h2{
        position:absolute;
        font-size: 22px;
        color:#aaddff;
        display: flex;
        left:2%;
        top:5%;
        align-items: center;
    }
    .wrap .center .slide-bottom h2 img{
        width:41px;
    }

    .title{
        font-size:22px;
        color:#aaddff;
       
    }
    
</style>