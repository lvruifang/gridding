<template>
    <div class="wrap">
        <div class="left">
            <div class="slide-top">
                <h2>大数据统计分析</h2>
                <div class="item-wrap">
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">216</p>
                            <p>一级网格</p>
                        </div>
                    </div>
                    <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">553</p>
                            <p>二级网格</p>
                        </div>
                    </div>
                     <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">300</p>
                            <p>三级网格</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-center">
                <h2 :class="['title']"> <img src="@/assets/images/dyfx.png" alt=""> <span>网格员性别分布</span></h2>
                <div class="top">
                    <span>网格员总人数</span>
                    <p>
                        <span style="color:#77c8ff;">558</span>
                    </p>
                </div>
                <div class="center">
                    <div class="left">
                        <span>男性网格员</span>
                        <span class="num">308</span>
                    </div>
                    <div class="right">
                        <span>女性网格员</span>
                        <span class="num" style="color:#eeba29;">261</span>
                    </div>
                </div>
                <div class="bottom">
                    <grid-sex :data = "data9"></grid-sex>
                </div>
            </div>
            <div class="slide-bottom">
                 <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>网格员年龄分布</span></h2>
                 <div class="echart">
                     <grid-age :data="data3"></grid-age>
                 </div>
            </div>
        </div>
        <div class="center">
            <div class="categoryTitle">
                <span  class="cur" @click="go('wgfx')">网格</span>
                <span  @click="go('jzfx')">建筑</span>
                <span @click="go('rkfx')">人口</span>
            </div>
            <div class="slide-top">
                <h2 :class="['title']"><p>3+1+</p><span>x</span></h2>
                <p class="txt">东花园镇位于怀来县东南部，南靠燕山余脉，北倚官厅湖畔，东与北京市延庆县康庄镇、八达岭镇接壤。全镇辖21个行政村，总面积136.16平方公里，耕地面积27555亩，常住人口17412人（2017年）。打造北京产业拓展区，构筑京畿稳定桥头堡东花园镇针对 北京市场，规划了四个产业区，即沿湖旅游产业区、现代种植产业区、高档葡萄和葡萄酒产业区、生态休闲旅游产业区。</p>
            </div>
             <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon4.png" alt=""> <span>党员年龄结构分析</span></h2>
                <div class="echart">
                    <gridType :data="data2"></gridType>
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
                    <span>网格员学历分析</span>
                </h2>
                <div class="echart">
                   <grid-education ></grid-education>
                </div>
            </div>
             <div class="slide-bottom">
                <h2>
                    <img src="@/assets/images/icon4.png" alt="">
                    <span>网格类型比例</span>
                </h2> 
                <div class="echart">
                    <ul>
                        <li v-for="(item,index) in data7" :key="index">
                            <grid-typeScale :data="item"></grid-typeScale>
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                     
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import gridSex from '@/components/bigData/gridAnalysis/grid/gridSex'
import gridAge from '@/components/bigData/gridAnalysis/grid/gridAge'
import gridType from '@/components/bigData/gridAnalysis/grid/gridType'
import gridEducation from '@/components/bigData/gridAnalysis/grid/gridEducation'
import gridTypeScale from '@/components/bigData/gridAnalysis/grid/gridTypeScale'
export default {
    name: 'gridAnalysis',

    data() {
        return {

            data5: {
                title: '党员类型',
                data: [
                    {
                        value: 335,
                        name: '退伍军人',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 310,
                        name: '退休干部',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 234,
                        name: '公司职员',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 200,
                        name: '农民',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    }
                ]
            },
            data6: {
                title: "人口年龄分布",
                data: [0, 116, 237, 116, 306, 1969, 1699, 903, 227],
                areaNameS: [
                "0-6岁",
                "6-12岁",
                "12-18岁",
                "18-22岁",
                "22-30岁",
                "30-45岁",
                "45-60岁",
                "60-80岁",
                "80以上"
                ]
            },
            data: {
                data:[
                { 
                    value: 35,
                    name: "民主评议会", 
                    itemStyle: {
                    color: '#e7b41d'
                    } 
                },
                { 
                    value: 40, 
                    name: "组织生活会" ,
                    itemStyle: {
                    color: '#ff1c4c'
                    } 
                },
                { 
                    value: 25, 
                    name: "全体党员" ,
                    itemStyle: {
                    color: '#0ce6ff'
                    } 
                },
            ]},
            data4:{
                title: '学历结构',
                data: [2,19,1],
                areaNameS :["大专","本科","研究生"],
            },
            data3:{
                nameList:["20-25","26-30","31-35","36-40","41-50"],
                valueList:[55,12,30,33,46],
                data:[
                   {name:"20-25",value:55},
                   {name:"26-30",value:12},
                   {name:"31-35",value:30},
                   {name:"36-40",value:33},
                   {name:"41-50",value:46},
                ]
            },
             data7:[

                    {name:"街村",value:56,color: '#de3bf4',value1:44},
                    {name:"社区",value:74,color:"#6ecce5",value1:26},
                    {name:"商业街",value:68,color:"#4265f3",value1:32},
                    {name:"企业",value:86,color:"#e97d16",value1:14},
                    {name:"其他",value:54,color:"#7ee66d",value1:46}
             ],
            data8:{
                title:"",
                data:[
                        {
                            value:60,
                            name:'男',
                            itemStyle: {
                                color: '#0d7db0'
                            }
                        },
                        {
                            value:40, 
                            name:'女',
                            itemStyle: {
                                color: '#d566d2'
                            }
                        },
                    ]
            },
             data2: {
                data: [
                    {
                        value: 62,
                        name: '街村',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 50,
                        name: '商业街',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 40,
                        name: '部队',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 30,
                        name: '大杂院',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                     {
                        value: 21,
                        name: '社区',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 21,
                        name: '企业',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 41,
                        name: '科研机构',
                        itemStyle: {
                            color: '#fb8d0b'
                        }
                    },
                     {
                        value: 41,
                        name: '其他',
                        itemStyle: {
                            color: '#7c75ff'
                        }
                    }
                ]
            },
            data9:{
                title:"",
                data:[
                    {name:"女",value:46,itemStyle: {
                            color: '#eeba29'
                        }},
                    {name:"男",value:54,itemStyle: {
                            color: '#51afea'
                        }}
                ]
            }
        };
    },

    mounted() {
        
    },

    methods: {
         go(name){
            this.$router.push({name:name});
        },
    },
    components:{
        gridSex,
        gridAge,
        gridType,
        gridEducation,
        gridTypeScale
        
    },
};
</script>

<style scoped>
    .categoryTitle{
        display: flex;
        width:80%;
        margin:0 auto;
        justify-content: space-between;
        position: absolute;
        left:10%;
        top:40px;
    }
     .categoryTitle span{
         width:184px;
         height: 54px;
         background:url('@/assets/images/titleBg.png') no-repeat center center;
         background-size:100% 100%;
        mix-blend-mode: screen;  
        font-size:22px;
        text-align: center;
        line-height: 54px;
        color:#64dcea;
        cursor: pointer;
     }
    .categoryTitle span.cur{
         color:#fff;
         
     }
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
    .wrap .left .slide-center{
        width:100%;
        height:38.65%;
         background: url("@/assets/images/leftCenter.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:5%;
         mix-blend-mode: screen;  
        position: relative;
        padding:1px 6% 0;
        
    }
     .wrap .left .slide-top h2{
         color:#49b6db;
     }
    .wrap .left .slide-center .top{
        width:100%;
        height:14.6%;
        background: url("@/assets/images/leftCenterTop.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: lighten;  
        margin-top:15%;
        font-size:16px;
        color:#fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 5%;
    }
    .wrap .left .slide-center .top p{
        font-size: 38px;
    }
    .wrap .left .slide-center .center{
        height:13.5%;
         margin-top:3%;
         display: flex;
         width:100%;
         justify-content: space-between;
         font-size: 14px;
         color:#aaddff;
         
    }
    .wrap .left .slide-center .center .left{
        width:47%;
        height:100%;
         background: url("@/assets/images/leftCenterC.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: lighten;  
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 5%;
    }
    .wrap .left .slide-center .center .num{
        font-size:24px;
        color:#77c8ff;
    }
     .wrap .left .slide-center .center .right{
        width:47%;
        height:100%;
         background: url("@/assets/images/leftCenterC.png") no-repeat center center;
        background-size:100% 100%;
       mix-blend-mode: lighten;  
        display: flex;
        justify-content: space-between;
        align-items: center;
         padding:0 5%;
    }
    .wrap .left .slide-center .bottom{
        height:39.48%;
        margin-top:3%;   
        background: url("@/assets/images/leftCenterB.png") no-repeat center center;
        background-size:100% 100%;
       mix-blend-mode: lighten;  
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
    .wrap .left .slide-bottom{
        height:34%;
        background:url("@/assets/images/leftBottom.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen; 
        margin-top:5%;
        position: relative;
        padding-top:15%;
    }
    .wrap .left .slide-center h2 img{
        width:38px;
    }
    .wrap .left .slide-bottom h2 img{
        width:43px;
    }
     .wrap .left .slide-bottom .echart{
         width:90%;
         margin:0 auto;
         height:90%;
        
        
     }

    .wrap .right{
        width:25.23%;
        /* border:solid 1px red; */
    }
    .wrap .center{
        width:44.76%;
        position: relative;
        /* border:solid 1px red; */
    }
    .wrap .center .slide-top{
        height:50%;
        margin-top:100px;
        background: url("@/assets/images/centerTop.png") no-repeat center center;
        mix-blend-mode: screen;  
        background-size: 100% 100%;
        position: relative;
        padding-top:8%;
    }
    .wrap .center .slide-top h2{
       position: absolute;
       top:12%;
       left:8%;
       font-size:46px;
       color:#cffaff;
       display: flex;
       align-items: center;
       height:40px;
    }
    .wrap .center .slide-top p.txt{
        font-size: 16px;
        color:#feffff;
        width:37%;
        margin-left:8%;
        margin-top:7%;
        line-height: 1.7;
        text-align: justify;
    }
    .wrap .center .slide-top h2 span{
        font-size:61px;
        font-family: "Arial";
        position: relative;
        top:-2px;
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
    .wrap .center .slide-bottom h2{
        top:8%;
    }
    .wrap .center .slide-bottom .echart{
        width:100%;
        height:90%;
       margin-top:10px;
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
    .wrap .right .slide-center{
        width:100%;
        height:38.65%;
         background: url("@/assets/images/leftCenter.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:5%;
         mix-blend-mode: screen;  
        position: relative;
        padding:1px 6% 0;
        
    }
    .wrap .right .slide-center .echart{
        height:75%;
        margin-top:15%;
    }
    .wrap .right .slide-bottom .echart{
        height:95%;
        margin-top:5%;
    }
    .wrap .right .slide-bottom{
        height:34%;
        background:url("@/assets/images/leftBottom.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen; 
        margin-top:5%;
        position: relative;
    }
    .wrap .right .slide-bottom ul{
        height:100%;
        width:80%;
        margin:0 auto;
        padding-top:10%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    .wrap .right .slide-bottom ul li{
        width:90px;
        height: 30%;
        text-align: center;
        margin:0 15px;
        font-size:16px;
    }
    .title{
        font-size:22px;
        color:#aaddff;
       
    }
    
</style>