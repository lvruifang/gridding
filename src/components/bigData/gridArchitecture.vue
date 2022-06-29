<template>
    <div class="wrap">
        <div class="left">
            <div class="slide-top">
                <h2>大数据统计分析</h2>
                <div class="item-wrap">
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">593</p>
                            <p>建筑数量</p>
                        </div>
                    </div>
                    <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">323</p>
                            <p>房屋数量</p>
                        </div>
                    </div>
                     <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">1037</p>
                            <p>部件数量</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-center">
                <h2 :class="['title']"> <img src="@/assets/images/dyfx.png" alt=""> <span>建筑物类别分布</span></h2>
                <div class="top">
                    <span>建筑总数</span>
                    <p>
                        <span style="color:#77c8ff;">593</span>
                    </p>
                </div>
                <div class="center">
                    <div class="left">
                        <span>生产性建筑</span>
                        <span class="num">308</span>
                    </div>
                    <div class="right">
                        <span>民用建筑</span>
                        <span class="num" style="color:#eeba29;">261</span>
                    </div>
                </div>
                <div class="bottom">
                    <architecture-category :data = "data9"></architecture-category>
                </div>
            </div>
            <div class="slide-bottom">
                 <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>生产性建筑物分布</span></h2>
                 <div class="echart">
                     <ul>
                        <li v-for="(item,index) in data7" :key="index">
                            <productive-buildings :data="item"></productive-buildings>
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                 </div>
            </div>
        </div>
        <div class="center">
            <div class="categoryTitle">
                <span  @click="go('wgfx')">网格</span>
                <span class="cur" @click="go('jzfx')">建筑</span>
                <span @click="go('rkfx')">人口</span>
            </div>
            <div class="slide-top">
                <img src="@/assets/images/jzImg.png" alt="">
            </div>
             <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon4.png" alt=""> <span>民用建筑物分布</span></h2>
                <div class="echart">
                    <civil-architecture :data="data2"></civil-architecture>
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
                    <span>建筑物年分布</span>
                </h2>
                <div class="echart">
                   <architecture-year ></architecture-year>
                </div>
            </div>
             <div class="slide-bottom">
                <h2>
                    <img src="@/assets/images/icon4.png" alt="">
                    <span>房屋使用情况分布</span>
                </h2>
                <div class="echart">
                    <house-use :data="data4"></house-use>
                     
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>



import architectureCategory from '@/components/bigData/gridAnalysis/architecture/architectureCategory'
import productiveBuildings from '@/components/bigData/gridAnalysis/architecture/productiveBuildings'
import architectureYear from '@/components/bigData/gridAnalysis/architecture/architectureYear'
import civilArchitecture from '@/components/bigData/gridAnalysis/architecture/civilArchitecture'
import houseUse from '@/components/bigData/gridAnalysis/architecture/houseUse'


export default {
    name: 'gridAnalysis',

    data() {
        return {

       
            data4:{
                
                data: [5261,243,0,54,0],
                areaNameS :["自住","出租","闲置",'公益','其他'],
            },

             data7:[

                    {name:"工业建筑",value:56,color: '#2397f0',value1:44},
                    {name:"农业建筑",value:74,color:"#9e915b",value1:26},
             ],
           
             data2: {
                data: [
                    {
                        value: 62,
                        name: '行政办公建筑',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 50,
                        name: '文教建筑',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 40,
                        name: '科研建筑',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 40,
                        name: '医疗建筑',
                        itemStyle: {
                            color: '#ea3434'
                        }
                    },
                    {
                        value: 30,
                        name: '商业建筑',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                     {
                        value: 21,
                        name: '观览建筑',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 21,
                        name: '体育建筑',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 41,
                        name: '旅馆建筑',
                        itemStyle: {
                            color: '#fb8d0b'
                        }
                    },
                     {
                        value: 41,
                        name: '交通建筑',
                        itemStyle: {
                            color: '#7c75ff'
                        }
                    },
                     {
                        value: 41,
                        name: '园林建筑',
                        itemStyle: {
                            color: '#601986'
                        }
                    }
                ]
            },
            data9:{
                title:"",
                data:[
                    {name:"生产线建筑",value:46,itemStyle: {
                            color: '#eeba29'
                        }},
                    {name:"民用建筑",value:54,itemStyle: {
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
        architectureCategory,
        productiveBuildings,
        architectureYear,
        civilArchitecture,
        houseUse
        
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
    .wrap .left .slide-bottom .echart ul{
        height:100%;
        width:100%;
        display: flex;
        justify-content: center;
    }
     .wrap .left .slide-bottom .echart ul li{
         width:35%;
         height:80%;
         margin:0 25px;
         text-align: center;
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
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .wrap .center .slide-top img{
        width:80%;
        
        
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
        height:90%;
       
    }
    .wrap .right .slide-bottom{
        height:34%;
        background:url("@/assets/images/leftBottom.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen; 
        margin-top:5%;
        position: relative;
        padding-top:15%;
    }
  
    .title{
        font-size:22px;
        color:#aaddff;
       
    }
    
</style>