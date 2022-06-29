<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconFyd.png" alt="">
                        <span>总数</span>
                        <span class="num">1000</span>
                    </div>
                </div>
            </el-col>
           <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconJd.png" alt="">
                        <span>酒店</span>
                        <span style="color:#ffd510;" class="num">113</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconYly.png" alt="">
                        <span >养老院</span>
                        <span style="color:#67baf5;" class="num">213</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <p class="title">疫苗接种数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconXx.png" alt="">
                        <span >学校</span>
                        <span style="color:#6bab69;" class="num">500</span>
                    </div>
                </div>
            </el-col> 
        </el-row>
         <el-table
        :data="tableData"
        :cell-style="cellStyle"
        @row-click="rowClick"
        style="width: 100%"
        
       >
        <el-table-column
        type="index"
        width="80"
        align="center"
        label="序号"
       >
       
        </el-table-column>
        <el-table-column
        prop="pointName"
        align="center"
        min-width=160
        label="防疫点名称"
       >
       
        </el-table-column>
        <el-table-column
        prop="type"
        align="center"
        label="类型"
        >
        </el-table-column>
         <el-table-column
        prop="address"
        align="center"
        min-width=270,
        label="地址">
        </el-table-column>
        <el-table-column
        prop="name"
        align="center"
        min-width=106,
        label="负责人">
        </el-table-column>
        <el-table-column
        prop="phone"
        align="center"
        min-width=260,
        label="电话">
        </el-table-column>
        <el-table-column  min-width=114, align="center">
        <template>
            <a href="javascript:;">详情 ></a>
        </template>
        </el-table-column>
    </el-table>

    <el-dialog
            :visible.sync="dialogVisible"
            width="33%"
            :before-close="handleClose">
            <vaccination-details></vaccination-details>
            </el-dialog>
    </div>
</template>

<script>
import vaccinationDetails from '@/components/epidemicPrevention/popup/vaccinationDetails'
export default {
    name: 'KeyEpidemicPoints',

    data() {
        return {
             tableData: [
                {
                    name:"张一山",
                    pointName:"东花园镇第一小学",
                    type:"学校",
                    phone:"18810068960",
                    address: "东花园镇大南辛堡村某某路 101号   ",
                },
                {
                    name:"张一山",
                    pointName:"东花园镇第一小学",
                    type:"学校",
                    phone:"18810068960",
                    address: "东花园镇大南辛堡村某某路 101号   ",
                },
                {
                    name:"张一山",
                    pointName:"东花园镇第一小学",
                    type:"学校",
                    phone:"18810068960",
                    address: "东花园镇大南辛堡村某某路 101号   ",
                },
                {
                    name:"张一山",
                    pointName:"东花园镇第一小学",
                    type:"学校",
                    phone:"18810068960",
                    address: "东花园镇大南辛堡村某某路 101号   ",
                },
            ],
            dialogVisible:false
        };
    },

    mounted() {
        
    },
    components:{
        vaccinationDetails
    },
    methods: {
        rowClick(){
            this.dialogVisible=true;
        },
        cellStyle ({row, column, rowIndex, columnIndex}) {
            if (columnIndex == 0){
                return {'color':'#5abbff'}
            }
        }
    },
};
</script>

<style scoped>
    .indexColor{
        color:#5abbff;
    }
    .list{
        width:100%;
        height:150px;
        background: url("@/assets/images/ymxxBg.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:90px;
        position: relative;
        color:#d4eaf6;
    }
    .title{
        font-size:20px;
        color:#92d5ff;
        position: relative;
        top:-11px;
        left:2px;
    }
    .des{
        display: flex;
        align-items: center;
        padding-left:5%;
        font-size: 22px;
        color:#d4eaf6;


    }
    .des img{
        width:90px;
        margin-right:28px;
    }
    .des .num{
        font-size: 40px;
        color:#e73851;
        margin-left: 26px;
    }
</style>