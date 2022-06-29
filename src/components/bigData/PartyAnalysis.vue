<template>
    <div class="wrap">
        <div class="left">
            <div class="slide-top">
                <h2>大数据统计分析</h2>
                <div class="item-wrap">
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">16</p>
                            <p>党员数量</p>
                        </div>
                    </div>
                    <div class="jt">
                    </div>
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
                            <p class="num">30</p>
                            <p>会议数</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-center">
                <h2 :class="['title']"> <img src="@/assets/images/dyfx.png" alt=""> <span>党员分析</span></h2>
                <div class="top">
                    <span>党员总数/人口总数</span>
                    <p>
                        <span style="color:#ffb956;">16</span>
                        <span style="color:#4f6778;">/</span>
                        <span style="color:#77c8ff;">5593</span>
                    </p>
                </div>
                <div class="center">
                    <div class="left">
                        <span>直属党员</span>
                        <span class="num">10人</span>
                    </div>
                    <div class="right">
                        <span>双报道党员</span>
                        <span class="num" style="color:#eeba29;">6人</span>
                    </div>
                </div>
                <div class="bottom">
                    <party-member-analysis :data = "data7"></party-member-analysis>
                </div>
            </div>
            <div class="slide-bottom">
                 <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>男女比例</span></h2>
                 <div class="echart">
                     <gender-ratio :data="data8"></gender-ratio>
                 </div>
                 <div class="echart1">
                    <men-and-women ></men-and-women>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="slide-top">
                <h2 :class="['title']">党员类型分布</h2>
                <div class="echart">
                    <party-type  :data="data5" ></party-type>
                </div>
                <ul class="list">
                    <li>
                        <span class="num">23</span>
                        <span>退伍军人</span>
                    </li>
                    <li>
                        <span class="num">15</span>
                        <span>退休干部</span>
                    </li>
                    <li>
                        <span class="num">16</span>
                        <span>公司职员</span>
                    </li>
                    <li>
                        <span class="num">30</span>
                        <span>农民</span>
                    </li>
                </ul>
            </div>
             <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon4.png" alt=""> <span>党员年龄结构分析</span></h2>
                <div class="echart">
                    <age-distribution :data="data6"></age-distribution>
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
                    <img src="@/assets/images/icon2.png" alt="">
                    <span>会议类型</span>
                </h2>
                <div class="echart">
                    <conference-distribution :data="data"></conference-distribution>
                </div>
            </div>
             <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon4.png" alt="">
                    <span>会议数量</span>
                </h2>
                <div class="echart">
                    <meeting-number :data="data3"></meeting-number>
                </div>
            </div>
             <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon3.png" alt="">
                    <span>学历结构</span>
                </h2>
                <div class="echart">
                    <educational-structure :data="data4"></educational-structure>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import partyType from '@/components/bigData/PartyAnalysis/partyType'
import ageDistribution from "@/components/bigData/PartyAnalysis/ageDistribution";
import conferenceDistribution from "@/components/bigData/PartyAnalysis/conferenceDistribution"
import educationalStructure from "@/components/bigData/PartyAnalysis/educationalStructure"
import meetingNumber from "@/components/bigData/PartyAnalysis/meetingNumber"
import partyMemberAnalysis from "@/components/bigData/PartyAnalysis/partyMemberAnalysis"
import genderRatio from "@/components/bigData/PartyAnalysis/genderRatio"
import menAndWomen from "@/components/bigData/PartyAnalysis/menAndWomen"
export default {
    name: 'partyAnalysis',

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
                title:"会议数量",
                nameList:["民主评议会","组织生活会","党员活动"],
                data:[
                   {name:"民主评议会",value:8},
                   {name:"组织生活会",value:6},
                   {name:"党员活动",value:4},
                ]
            },
            data7:{
                title:"",
                nameList: ["直属党员", "双报到党员"],
                valueList: [10,6],
                namevalueList: [{
                        name: "直属党员",
                        value: 10
                    },
                    {
                        name: "双报到党员",
                        value: 6
                    }
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
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        partyType,
        ageDistribution,
        conferenceDistribution,
        educationalStructure,
        meetingNumber,
        partyMemberAnalysis,
        genderRatio,
        menAndWomen
        
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
         width:70%;
         margin:0 auto;
         height:33%;
         margin-top:2%;
        
     }
     .wrap .left .slide-bottom .echart1{
         width:70%;
         margin:0 auto;
         height:40%;
         margin-top:5%;
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
        height:219px;
        overflow: hidden;
         width:70%;
        margin:0 auto;
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

    .wrap .right .slide-item{
        height:23.4%;
        width:100%;
        background: url("@/assets/images/rightItem.png") no-repeat center center;
        background-size:100% 100%;
        mix-blend-mode: screen;  
        margin-top:5%;
        position: relative;
        padding-top:10%;
        
    }
    .wrap .right .slide-item .echart{
        width:100%;
        height:90%;
    }
    .wrap .right .slide-item h2 img{
        width:45px;
    }
    
    .title{
        font-size:22px;
        color:#aaddff;
       
    }
    .list{
        display: flex;
        justify-content: space-between;
        width:70%;
        margin:30px auto 0;
    }
    .list li{
        width:70px;
        text-align: center;
        display: flex;
        flex-direction: column;
       align-items: center;
       font-size: 16px;
       color:#92d5ff;
    }
    .list li .num{
        width:60px;
        height:60px;
        font-size: 22px;
        color:#031841;
        text-align: center;
        line-height: 60px;
        background: #16f5e3;
        border-radius: 60px;
        margin-bottom: 12px;
    }
    .list li:nth-child(2) .num{
         background: #ffcc00;
    }
    .list li:nth-child(3) .num{
        background: #6eff68;
    }
    .list li:nth-child(4) .num{
        background: #ff6f6f;
    }
</style>