<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="list">
                    <p class="title">疫苗接种数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconWjz.png" alt="">
                        <span>未接种人数</span>
                        <span class="num">{{vaccineBigData.zeroInjectionCount}}</span>
                    </div>
                </div>
            </el-col>
           <el-col :span="6">
                <div class="list">
                    <p class="title">疫苗接种数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/vaccineFirst.png" alt="">
                        <span>接种一针人数</span>
                        <span style="color:#ffd510;" class="num">{{vaccineBigData.oneInjectionCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <p class="title">疫苗接种数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/vaccineTwo.png" alt="">
                        <span >接种二针人数</span>
                        <span style="color:#67baf5;" class="num">{{vaccineBigData.twoInjectionCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <p class="title">疫苗接种数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/vaccineThree.png" alt="">
                        <span >接种三针人数</span>
                        <span style="color:#6bab69;" class="num">{{vaccineBigData.threeInjectionCount}}</span>
                    </div>
                </div>
            </el-col> 
        </el-row>
         <el-table
        :data="vaccineList"
        :cell-style="cellStyle"
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
        prop="mobile"
        align="center"
        min-width=115,
        label="电话">
        </el-table-column>
        <el-table-column
        prop="grid"
        align="center"
        min-width=106,
        label="所属网格">
        </el-table-column>
        <el-table-column
        prop="address"
        align="center"
        min-width=160,
        label="住址">
        </el-table-column>
       
        <el-table-column
        prop="type"
        align="center"
        label="人口类型">
        </el-table-column>
         <el-table-column
        prop="status"
        align="center"
        label="接种状态">
        </el-table-column>
        <el-table-column  min-width=114, align="center">
        <template slot-scope="scope"> 
            <a href="javascript:;" @click="rowClick(scope.row.id)">接种详情</a>
        </template>
        </el-table-column>
    </el-table>

    <el-dialog
            :visible.sync="dialogVisible"
            width="33%"
            :before-close="handleClose">
            <vaccination-details :data = detailData></vaccination-details>
            </el-dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { getVaccineBigData,getVaccineList,getVaccineInfo } from "@/api/antiepidemic";
import vaccinationDetails from '@/components/epidemicPrevention/popup/vaccinationDetails'
export default {
    name: 'vaccineInformation',
 
    data() {
        return {
             vaccineList: [],
            dialogVisible:false,
            vaccineBigData:{},
            detailData:{}
        };
    },
  
    created() {
        this.getVaccineBigData();
        this.getVaccineList();
    },
    components:{
        vaccinationDetails
    },
    methods: {
        handleClose(done) {
            done();
        },
        rowClick(id){
            this.getVaccineInfo(id);
        },
        cellStyle ({row, column, rowIndex, columnIndex}) {
            if (columnIndex == 0){
                return {'color':'#5abbff'}
            }
        },
        async getVaccineInfo(id){
          try {
            const { data } = await getVaccineInfo(id);
            this.detailData = data;
            console.log(data,"1111")
            this.dialogVisible = true;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
        async getVaccineBigData(){
          try {
            const { data } = await getVaccineBigData();
            this.vaccineBigData = data;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
        async getVaccineList(){
          try {
            const { data } = await getVaccineList();
            this.vaccineList = data;
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
        font-size: 22px;
        color:#d4eaf6;

    }
    .des img{
        width:86px;
        margin-right:17px;
    }
    .des .num{
        font-size: 40px;
        color:#e73851;
        margin-left: 8px;
    }
</style>