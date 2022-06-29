<template>
    <div class="rightContent">
            <el-row :gutter="20" class="dyglEcharts">
                <el-col :span="8"> 
                    <h2>党员类型</h2>
                    <party-type  :data="data5"></party-type>
                </el-col>
                <el-col :span="8"> 
                    <h2>党员年龄</h2>
                    <party-age  :data="data6" ></party-age>
                </el-col>
                <el-col :span="8"> 
                    <h2>学历结构</h2>
                    <educational-structure  :data="data4"></educational-structure>
                </el-col>
            </el-row>
            <ul class="personList">
                <li v-for="(item,index) in personData" :key="index" @click="dialogVisible = true">
                    <a href="javascript:;">
                        <img :src="item.imgSrc" alt="">
                        <p>{{item.name}}</p>
                        <span>详细</span>
                    </a>
                </li>
            </ul>
            <el-dialog
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <party-member></party-member>
            </el-dialog>
           
    </div>
</template>

<script>
import partyType from '@/components/partyBuilding/echartsComponent/partyType'
import partyAge from '@/components/partyBuilding/echartsComponent/partyAge'
import educationalStructure from '@/components/partyBuilding/echartsComponent/educationalStructure'
import partyMember from '@/components/partyBuilding/popup/partyMember.vue'
export default {
    name: 'PartyManagement',


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
                        value: 135,
                        name: '其他',
                        itemStyle: {
                            color: '#ff6f6f'
                        }
                    },
                    {
                        value: 200,
                        name: '农民',
                        itemStyle: {
                            color: '#bc74ff'
                        }
                    }
                ]
            },
            data6:{
                title: '党员年龄',
                data: [9,5,5,3,2],
                areaNameS :["18-30岁","30-40岁","40-50岁","50-60岁","60以上"],
            },
            data4:{
                title: '学历结构',
                data: [2,19,1],
                areaNameS :["大专","本科","研究生"],
            },
             data3: {
                title: '男女比例',
                data: [
                    {
                        value: 7,
                        name: '男',
                        itemStyle: {
                            color: '#51afea'
                        }
                    },
                    {
                        value: 3,
                        name: '女',
                        itemStyle: {
                            color: '#eeba29'
                        }
                    }
                ]
            },
            personData:[
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },{
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png")
                }
            ],
            dialogVisible:false,
            
        };
    },
    components:{
        partyType,
        partyAge,
        educationalStructure,
        partyMember
    },
    mounted() {
        
    },

    methods: {
        handleClose(done) {
            done();
        }
         
    },
};
</script>

<style scoped>
    .dyglEcharts{
        height:236px;
        margin-top:50px;
        overflow: hidden;
        margin-bottom:26px;
        display: flex;
        justify-content: space-between;
    }
    .el-col-8{
        height:100%;
         background: url("@/assets/images/eachartBg.png") no-repeat center center;
        background-size: 100% 100%;
        position: relative;
        width: 31%;
    }
    .el-col-8 h2{
        position: absolute;
        top:-6px;
        left:5px;
        font-size:20px;
        color:#92d5ff;
        font-weight:normal;
    }
    .personList{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width:100%;
    }
    .personList li{
        width:11.5%;
        background: url("@/assets/images/personBg.png") no-repeat center center;
        background-size: 100% 100%;
        margin-bottom:25px;
    }
    .personList li a{
        display: block;
        font-size: 18px;
        color:#92d5ff;
        display: flex;
        flex-direction: column;
        width:100%;
        align-items: center;
        padding:20px;
    }
    .personList li a img{
        width:107px;
        margin-bottom:18px;
    }
    .personList li a span{
        display: block;
        width:69px;
        height:24px;
        line-height: 24px;
        text-align: center;
        font-size: 14px;
        color:#fefefe;
        border-radius: 24px;
        background-image: linear-gradient( to right, rgba(81,29,175,0.5), rgba(35,215,254,0.5));
        margin-top:19px;
    }
    
</style>