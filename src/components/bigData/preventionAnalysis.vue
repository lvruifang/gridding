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
                            <p>哨点</p>
                        </div>
                    </div>
                    <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">593</p>
                            <p>流掉队伍</p>
                        </div>
                    </div>
                     <div class="jt">
                    </div>
                    <div class="item">
                        <img src="@/assets/images/zp.png" alt="">
                        <div class="txt">
                            <p class="num">300</p>
                            <p>采集点</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-center">
                <h2 :class="['title']"> <img src="@/assets/images/icon6.png" alt=""> <span>哨点分布</span></h2>
                <div class="top">
                    <span>哨点总数/医务人员数</span>
                    <p>
                        <span style="color:#ffb956;">16</span>
                        <span style="color:#4f6778;">/</span>
                        <span style="color:#77c8ff;">559</span>
                    </p>
                </div>
                <div class="bottom">
                   <sentinel-distribution :data="data4"></sentinel-distribution>
                </div>
            </div>
            <div class="slide-bottom">
                 <h2 :class="['title']"> <img src="@/assets/images/icon5.png" alt=""> <span>重点防疫点分布</span></h2>
                 <div class="echart">
                      <conference-distribution :data="data"></conference-distribution>
                 </div>
                <ul class="list1">
                    <li>
                        酒店 <span class="num" style="color:#e6b127;">168</span>
                    </li>
                    <li>
                        养老院 <span class="num" style="color:#ff295c;">58</span>
                    </li>
                    <li>
                        学校 <span class="num" style="color:#2de7eb;">96</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center">
            <div class="slide-top">
                <h2 :class="['title']">流动人员分布</h2>
                <div class="echart">
                    <party-type  :data="data5" ></party-type>
                </div>
                <ul class="list">
                    <li>
                        <span class="num">100</span>
                        <span>洽谈业务</span>
                    </li>
                    <li>
                        <span class="num">80</span>
                        <span>探亲</span>
                    </li>
                    <li>
                        <span class="num">308</span>
                        <span>务工</span>
                    </li>
                    <li>
                        <span class="num">109</span>
                        <span>旅居</span>
                    </li>
                    <li>
                        <span class="num">60</span>
                        <span>其他</span>
                    </li>
                </ul>
            </div>
             <div class="slide-bottom">
                <h2 :class="['title']"> <img src="@/assets/images/icon4.png" alt=""> <span>防疫三道防线</span></h2>
                <ul class="list1">
                    <li>
                        <span style="color:#16f5e3;">24</span>
                        <p>高速站口数</p>
                    </li>
                    <li>
                        <span style="color:#ffcc00;">2</span>
                        <p>高铁站数</p>
                    </li>
                    <li>
                        <span style="color:#6eff68;">24</span>
                        <p>公路检查站数</p>
                    </li>
                    <li>
                        <span style="color:#ff6f6f;">208</span>
                        <p>乡间路口数</p>
                    </li>
                </ul>
                <div class="list2">
                    <span class="t">封堵口</span>
                    <p>12</p>
                    <p style="background:#ffcc00;">0</p>
                    <p style="background:#6eff68;">6</p>
                    <p style="background:#ff6f6f;">102</p>
                </div>
                <div class="list2">
                    <span class="t">管控口</span>
                    <p>12</p>
                    <p style="background:#ffcc00;">0</p>
                    <p style="background:#6eff68;">6</p>
                    <p style="background:#ff6f6f;">102</p>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="slide-top">
                <h2>实时公告通知</h2>
                <p>社区服务平台以政府引导、企业建设、社会参与、市民受惠为原则，借助荣成“云治理平台”，整合市、区相关部门及本市区各街道公共服务资源，为市民提供了10大特色公共服务项目，其中APP开通了网格服务，形成“云”</p>
            </div>
            <div class="slide-item flow-team">
                <h2>
                    <img src="@/assets/images/icon4.png" alt="">
                    <span>流掉队伍</span>
                </h2>
                <div class="txt">
                    <p>队伍数量：108</p>
                    <p>人员总数：580</p>
                </div>
                <div class="xljg">学历结构</div>
                <div class="echart">
                    <flow-team :data="data8"></flow-team>
                </div>
            </div>
             <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon7.png" alt="">
                    <span>疫苗接种</span>
                </h2>
                <div class="echart">
                    <vaccination :data="data3"></vaccination>
                </div>
            </div>
             <div class="slide-item">
                <h2>
                    <img src="@/assets/images/icon8.png" alt="">
                    <span>核酸采集点</span>
                </h2>
                <div class="echart">
                     <gender-ratio :data="data7"></gender-ratio>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>

import conferenceDistribution from "@/components/bigData/preventionAnalysis/conferenceDistribution"
import sentinelDistribution from "@/components/bigData/preventionAnalysis/sentinelDistribution"
import vaccination from "@/components/bigData/preventionAnalysis/vaccination"
import genderRatio from "@/components/bigData/preventionAnalysis/genderRatio"
import flowTeam from "@/components/bigData/preventionAnalysis/flowTeam"
import partyType from '@/components/bigData/preventionAnalysis/partyType'

export default {
    name: 'partyAnalysis',

    data() {
        return {

            data5: {
                title: '党员类型',
                data: [
                    {
                        value: 335,
                        name: '洽谈业务',
                        itemStyle: {
                            color: '#16f5e3'
                        }
                    },
                    {
                        value: 310,
                        name: '探亲',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 234,
                        name: '务工',
                        itemStyle: {
                            color: '#6eff68'
                        }
                    },
                    {
                        value: 200,
                        name: '旅居',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                     {
                        value: 200,
                        name: '其他',
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
                    name: "酒店", 
                    itemStyle: {
                    color: '#e7b41d'
                    } 
                },
                { 
                    value: 40, 
                    name: "养老院" ,
                    itemStyle: {
                    color: '#ff1c4c'
                    } 
                },
                { 
                    value: 25, 
                    name: "学校" ,
                    itemStyle: {
                    color: '#0ce6ff'
                    } 
                },
            ]},
            data4:{
                title: '学历结构',
                data: [300,401,100,60],
                areaNameS: [
                "15-25岁",
                "25-35岁",
                "35-45岁",
                "45以上"
                ]
            },
            data3:{
                title:"会议数量",
                nameList:["第一针","第二针","第三针","未接种"],
                data:[
                   {name:"第一针",value:18000},
                   {name:"第二针",value:15000},
                   {name:"第三针",value:9000},
                   {name:"未接种",value:2000},
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
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        partyType,
        conferenceDistribution,
        sentinelDistribution,
        vaccination,
        genderRatio,
        flowTeam
        
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
    .wrap .left .slide-center .bottom{
        height:55%;
        margin-top:3%;   
        background: url("@/assets/images/leftCenterB.png") no-repeat center center;
        background-size:100% 100%;
       mix-blend-mode: lighten;  
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
        width:37px;
    }
    .wrap .left .slide-bottom h2 img{
        width:43px;
    }
     .wrap .left .slide-bottom .echart{
         width:70%;
         margin:0 auto;
         height:60%;

        
     }
    .wrap .left .slide-bottom .list1{
        display: flex;
        font-size: 16px;
        justify-content: space-around;
        padding:0 5%;
        margin-top:4%;
    }
    .wrap .left .slide-bottom .list1 .num{
        font-size:27px;
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
    .wrap .center .slide-bottom .list1{
        width:70%;
        margin:4% auto 0;
       
       display: flex;
       justify-content: space-between;
       font-size:17px;
    }
    .wrap .center .slide-bottom .list1 li{
        text-align: center;
    }
    .wrap .center .slide-bottom .list1 span{
        font-size:43px;
    }
    .wrap .center .slide-bottom .list2{
        display: flex;
        width:70%;
        margin:3% auto;
        justify-content: space-between;
        position: relative;
    }
    .wrap .center .slide-bottom .list2 .t{
        color:#fff;
        font-size: 16px;
        position:absolute;
        left:-73px;
        top:4px;
    }
    .wrap .center .slide-bottom .list2 p{
        width:90px;
        height:29px;
        border-radius: 29px;
        background: #16f5e3;
        font-size: 16px;
        font-weight:bold;
        line-height:29px;
        text-align: center;
        color:#031841;
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
    .wrap .right .flow-team .txt{
        font-size: 16px;
        position: absolute;
        left:12%;
        top:40%;
        line-height: 2;
    }
    .wrap .right .flow-team .xljg{
         font-size: 16px;
        position: absolute;
        left:12%;
        bottom:10%;
    }
    .wrap .right .slide-item h2 img{
        width:43px;
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
    .list li:nth-child(5) .num{
        background: #bc74ff;
    }
</style>