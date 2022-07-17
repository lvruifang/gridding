<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/sheng.png" alt="">
                        <span>跨省流动人数</span>
                        <span class="num">{{mobilityPersonnelBigData.crossProvinceCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨市流动人数</span>
                        <span class="num" style="color:#ffc70c;">{{mobilityPersonnelBigData.crossCityCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                     <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨县流动人数</span>
                        <span class="num" style="color:#92d5ff;">{{mobilityPersonnelBigData.crossCountyCount}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <button class="fxypBtn" @click="rowClick">分析研判</button>
         <el-table
        :cell-style="cellStyle"
        :data="mobilityPersonnelList"
        style="width: 100%"
       >
        <el-table-column
        type="index"
        width="80"
        align="center"
        label="序号"
        cell-class-name="indexColor"
       >
        </el-table-column>
        <el-table-column
        prop="name"
        align="center"
        label="姓名"
       
       >
        </el-table-column>
        <el-table-column
        prop="sex"
        align="center"
        label="性别"
        >
        </el-table-column>
        <el-table-column
        prop="id_number"
        align="center"
        min-width=188,
        label="身份证号">
        </el-table-column>
        <el-table-column
        prop="arrive_date"
        align="center"
        min-width=106,
        label="时间（来怀）">
        </el-table-column>
        <el-table-column
        prop="from_place"
        align="center"
        min-width=106,
        label="来访地">
        </el-table-column>
        <el-table-column
        prop="to_place"
        align="center"
        min-width=166,
        label="到访地">
        </el-table-column>
        <el-table-column
        prop="subject_matter"
        align="center"
        label="事由">
        </el-table-column>
        <el-table-column
        prop="mobile"
        align="center"
        min-width=115,
        label="电话">
        </el-table-column>
        <el-table-column
        prop="nuclein"
        align="center"
        label="核酸">
        </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
            background
            v-if = "total > 6"
            layout="prev, pager, next"
            :total=total
            :page-size=pageSize
            @current-change = "currentChange"
            class="pagination"
            >
            </el-pagination>
        </div>
    </div>
</template>
 
<script>
import { mapState } from "vuex";
import { getMobilityPersonnelBigData,getMobilityPersonnelList } from "@/api/antiepidemic";
export default {
    name: 'floatingPersonnel',
    data() {
        return {
            mobilityPersonnelList: [],
            pageSize:6,
            mobilityPersonnelBigData:{},
            total:0,
        };
    },

    created() {
        this.getMobilityPersonnelBigData();
        this.getMobilityPersonnelList(1);
    },

    methods: {
        rowClick(){
            this.$router.push({name:"ldryxq"}) 
        },
        cellStyle ({row, column, rowIndex, columnIndex}) {
            if (columnIndex == 0){
                return {'color':'#5abbff'}
            }
        },
        currentChange(num){
            this.getMobilityPersonnelList(num);
        },
        async getMobilityPersonnelBigData(){
          try {
            const { data } = await getMobilityPersonnelBigData();
            this.mobilityPersonnelBigData = data;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
        async getMobilityPersonnelList(num){
          try {
            const { data,count } = await getMobilityPersonnelList({
                page:num,
                page_size:this.pageSize
            });
            this.mobilityPersonnelList = data;
            this.total = count;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
    },
};
</script>

<style scoped>
    .fxypBtn{
        margin-bottom:-70px;
        width:300px;
        height:50px;
        line-height: 50px;
        cursor: pointer;
        float:right;
        color:#fff;
        font-size: 18px;
        background:url("@/assets/images/btnBg.png") no-repeat 100% 100%;
        padding:0;
        margin:15px 0;
        border-width:0;
        border-radius: 0px;
    }
    .list{
        width:100%;
        height:150px;
        background: url("@/assets/images/ldryBg.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:90px;
        position: relative;
         color:#d4eaf6;
    }
    .rightContent .title{
        font-size:20px;
        color:#92d5ff;
        position: relative;
        top:-11px;
        left:2px;
    }
    .des{
        display: flex;
        align-items: center;
        font-size: 26px;
        color:#d4eaf6;

    }
    .des img{
        width:94px;
        margin-right:27px;
    }
    .des .num{
        font-size: 40px;
        color:#e73851;
        margin-left: 24px;
    }
</style>