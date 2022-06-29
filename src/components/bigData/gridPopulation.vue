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
                            <p>人口总数</p>
                        </div>
                    </div>
                    <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">323</p>
                            <p>常住人口</p>
                        </div>
                    </div>
                     <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">1037</p>
                            <p>流动人口</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-center">
                <h2 :class="['title']"> <img src="@/assets/images/dyfx.png" alt=""> <span>实有人口户籍分布</span></h2>
                 <div class="echart">
                    <ul>
                        <li v-for="(item,index) in data7" :key="index">
                            <registered-residence :data="item"></registered-residence>
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                     
                </div>
            </div>
            <div class="slide-bottom ">
                 <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>教育程度分布</span></h2>
                 <div class="echart">
                     <education-level :data="data1"></education-level>
                 </div>
            </div>
            <div class="slide-bottom gender">
                 <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>男女比例</span></h2>
                  <div class="echart">
                     <gender-ratio :data="data8"></gender-ratio>
                 </div>
                 <div class="echart1">
                    <men-and-women></men-and-women>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="categoryTitle">
                <span  @click="go('wgfx')">网格</span>
                <span  @click="go('jzfx')">建筑</span>
                <span class="cur" @click="go('rkfx')">人口</span>
            </div>
            <div class="slide-top">
                 <h2 :class="['title']"><span>实有人口职业分布</span></h2>
                 <div class="echart">
                     <occupational-distribution :data="data2"></occupational-distribution>
                 </div>
                 
            </div>
            <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon4.png" alt=""> <span>人口年龄结构分析</span></h2>
                 <div class="echart">
                    <population-age :data="data6"></population-age>
                </div>
                
            </div>
             <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon4.png" alt=""> <span>实有人口时间出生与死亡曲线分布</span></h2>
                <div class="echart">
                    <curve-distribution :data="data3"></curve-distribution>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="slide-top">
                <h2>实时公告通知</h2>
                <p>社区服务平台以政府引导、企业建设、社会参与、市民受惠为原则，借助荣成“云治理平台”，整合市、区相关部门及本市区各街道公共服务资源，为市民提供了10大特色公共服务项目，其中APP开通了网格服务，形成“云”</p>
            </div>
           <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon01.png" alt="">
                    <span>实有人口民族分布</span>
                </h2>
                <div class="echart">
                    <ethnic-distribution :data="data"></ethnic-distribution>
                </div>
            </div>
            <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon01.png" alt="">
                    <span>实有人口收入分布</span>
                </h2>
                <div class="echart">
                  <population-income :data="data11"></population-income>
                </div>
            </div>
            <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon01.png" alt="">
                    <span>户籍分析</span>
                </h2>
                <div class="echart">
                  <registered-residence-analysis></registered-residence-analysis>
                </div>
            </div>
            <div class="slide-bottom">
                <h2>
                    <img src="@/assets/images/icon4.png" alt="">
                    <span>户口性质</span>
                </h2>
                <div class="echart">
                     <p>非农业家庭户</p>
                    <div class="echart">
                        <nature-of-household-registration :data="data31"></nature-of-household-registration>
                    </div>
                    <p>非农业集体户</p>
                    <div class="echart">
                        <nature-of-household-registration :data="data32"></nature-of-household-registration>
                    </div>
                    <p>农业集体户</p>
                    <div class="echart">
                        <nature-of-household-registration :data="data33"></nature-of-household-registration>
                    </div>
                    <p>农业家庭户</p>
                    <div class="echart">
                        <nature-of-household-registration :data="data34"></nature-of-household-registration>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import occupationalDistribution from '@/components/bigData/gridAnalysis/population/occupationalDistribution'
import curveDistribution from '@/components/bigData/gridAnalysis/population/curveDistribution'
import ethnicDistribution from '@/components/bigData/gridAnalysis/population/ethnicDistribution'
import populationAge from '@/components/bigData/gridAnalysis/population/populationAge'
import registeredResidence from '@/components/bigData/gridAnalysis/population/registeredResidence'
import educationLevel from '@/components/bigData/gridAnalysis/population/educationLevel'
import populationIncome from '@/components/bigData/gridAnalysis/population/populationIncome'
import natureOfHouseholdRegistration from '@/components/bigData/gridAnalysis/population/natureOfHouseholdRegistration'
import registeredResidenceAnalysis from '@/components/bigData/gridAnalysis/population/registeredResidenceAnalysis'
import genderRatio from "@/components/bigData/gridAnalysis/population/genderRatio"
import menAndWomen from "@/components/bigData/gridAnalysis/population/menAndWomen"


export default {
    name: 'gridPopulation',

    data() {
        return {
            data7:[
                    {name:"户在人在",value:80,color: '#2397f0',value1:44,color1:"#799dc0"},
                    {name:"户在人不在",value:13,color:"#988d50",value1:26,color1:"#799dc0"},
                    {name:"人在户不在",value:5,color:"#920783",value1:32,color1:"#123158"},
                    {name:"挂空",value:1,color:"#90ed7d",value1:14,color1:"#123158"},
                    {name:"其他",value:2,color:"#cc966a",value1:46,color1:"#123158"}
             ],
              data1:{
                nameList:["小学","初中","高中","中专","大专","本科","研究生"],
                valueList:[10,12,55,33,30,66,46],
                data:[
                   {name:"小学",value:10},
                   {name:"初中",value:12},
                   {name:"高中",value:55},
                   {name:"中专",value:33},
                   {name:"大专",value:30},
                   {name:"本科",value:66},
                   {name:"研究生",value:46},
                ]
            },
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
                        name: '军人',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 50,
                        name: '退伍军人',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 40,
                        name: '在职公务员',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 40,
                        name: '退休干部',
                        itemStyle: {
                            color: '#ea3434'
                        }
                    },
                    {
                        value: 30,
                        name: '在职事业单位人员',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                     {
                        value: 21,
                        name: '退休职员',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 21,
                        name: '公司职员',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    },
                     {
                        value: 41,
                        name: '农民',
                        itemStyle: {
                            color: '#fb8d0b'
                        }
                    },
                     {
                        value: 41,
                        name: '学生',
                        itemStyle: {
                            color: '#7c75ff'
                        }
                    },
                   
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
            data3:{
                data:{
                    name:["2015", "2016", "2017", "2018", "2019","2020","2021","2022"],
                    line1:[100, 200, 100, 401, 180,240,200,600],
                    line2:[300,252,153,400,500,324,123,400]
                } 
            },
             data: {
                data:[
                { 
                    value: 35,
                    name: "汉族", 
                    itemStyle: {
                    color: '#e7b41d'
                    } 
                },
                { 
                    value: 40, 
                    name: "满族" ,
                    itemStyle: {
                    color: '#ff1c4c'
                    } 
                },
                { 
                    value: 25, 
                    name: "回族" ,
                    itemStyle: {
                    color: '#0ce6ff'
                    } 
                },
            ]},
            data11:{
                title:"",
                 data:{
                    name:["1000", "2000", "5000", "10000", "15000","20000","30000"],
                    line1:[500, 1000, 800, 600, 1500,1900,800],
                } 
            },
            data31:{
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
            data32:{
                title:"",
                data:[
                   {
                       value:55,
                        itemStyle: {
                            color: '#e4b420'
                        }
                   }
                ]
            },
            data33:{
                title:"",
                data:[
                   {
                       value:55,
                        itemStyle: {
                            color: '#5e81f4'
                        }
                   }
                ]
            },
            data34:{
                title:"",
                data:[
                   {
                       value:55,
                        itemStyle: {
                            color: '#5e81f4'
                        }
                   }
                ]
            },
            
          
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
        registeredResidence,
        educationLevel,
        occupationalDistribution,
        populationAge,
        genderRatio,
        menAndWomen,
        curveDistribution,
        ethnicDistribution,
        populationIncome,
        natureOfHouseholdRegistration,
        registeredResidenceAnalysis
        
    },
};
</script>

<style scoped>
.wrap{
    width:100%;
    height:100%;
    overflow-y: scroll;
}
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
        height:34.3%;
        background:url("@/assets/images/leftBottom.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen; 
        margin-top:15px;
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
     .wrap .center .slide-top h2{
         top:8%;
         left:5%;
     }

    .wrap .center .slide-top .echart{
       height:70%;
       width:100%;
       
        
        
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
        width:90%;
        height:90%;
       margin:10px auto;
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
        right:15%;
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
    .wrap .right .slide-item{
        height:23.4%;
        width:100%;
        background: url("@/assets/images/rightItem.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen;  
        margin-top:4.3%;
        position: relative;
        padding-top:10%;
        
    }
    .wrap .right .slide-item .echart{
        width:90%;
        margin:0 auto;
        height:95%;
    }
    .wrap .right .slide-item h2 img{
        width:45px;
    }
    .wrap .left .slide-center .echart{
        height:95%;
        width:100%;
    }
    .wrap .right .slide-bottom{
        height:34.3%;
        background:url("@/assets/images/leftBottom.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen; 
        margin-top:4.3%;
        position: relative;
        padding-top:15%;
    }
    .wrap .left .slide-center ul{
        height:100%;
        width:100%;

        padding-top:10%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    .wrap .left .slide-center ul li{
        width:98px;
        height: 30%;
        text-align: center;
        margin:0 15px;
        font-size:16px;
    }
    .wrap .left .slide-center ul li:first-child{
        width:137px;
        height:40%;
    }
    .wrap .left .slide-center ul li:nth-child(2){
        width:137px;
        height:40%;
    }
    .wrap .left .slide-bottom.gender .echart{
         width:70%;
         margin:0 auto;
         height:33%;
         margin-top:2%;
        
     }
     .wrap .left .slide-bottom.gender .echart1{
         width:70%;
         margin:0 auto;
         height:40%;
         margin-top:5%;
     }
    .title{
        font-size:22px;
        color:#aaddff;
       
    }
     .wrap .right .slide-bottom .echart{
          width:90%;
         margin:1.5% auto 0;
         height:13px; 
     }
    .wrap .right .slide-bottom p{
         width:90%;
         margin:1.5% auto 0;
    }
    
</style>