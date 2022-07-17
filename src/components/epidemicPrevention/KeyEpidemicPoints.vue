<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconFyd.png" alt="">
                        <span>总数</span>
                        <span class="num">{{epKeyAreaBigData.totalCount}}</span>
                    </div>
                </div>
            </el-col>
           <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconJd.png" alt="">
                        <span>酒店</span>
                        <span style="color:#ffd510;" class="num">{{epKeyAreaBigData.hotelCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconYly.png" alt="">
                        <span >养老院</span>
                        <span style="color:#67baf5;" class="num">{{epKeyAreaBigData.beadhouseCount}}</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <p class="title">重点防疫点数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/iconXx.png" alt="">
                        <span >学校</span>
                        <span style="color:#6bab69;" class="num">{{epKeyAreaBigData.schoolCount}}</span>
                    </div>
                </div>
            </el-col> 
        </el-row>
         <el-table
        :data="epKeyAreaList"
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
        prop="head_name"
        align="center"
        min-width=106,
        label="负责人">
        </el-table-column>
        <el-table-column
        prop="head_contact"
        align="center"
        min-width=260,
        label="电话">
        </el-table-column>
        <el-table-column  min-width=114, align="center">
        <template slot-scope="scope">
            <a href="javascript:;" @click="rowClick(scope.row)">详情 ></a>
        </template>
        </el-table-column>
    </el-table>

    <el-dialog
            :visible.sync="dialogVisible"
            width="80%"
            :before-close="handleClose">
            <meeting-name :data = meetingDetail></meeting-name>
            </el-dialog>
    </div>
</template>

<script>
import meetingName from "@/components/epidemicPrevention/popup/meetingName"
import { mapState } from "vuex";
import { getEpKeyAreaBigData,getEpKeyAreaList,getEpKeyAreaInfo } from "@/api/antiepidemic";
export default {
    name: 'KeyEpidemicPoints',
    data() {
        return {
            epKeyAreaList: [],
            dialogVisible:false,
            epKeyAreaBigData:{},
            pageSize:6,
            total:0,
            meetingDetail:{}
        };
    },

    created() {
      this.getEpKeyAreaBigData();  
      this.getEpKeyAreaList(1);
    },
    components:{
        meetingName,
    },
    methods: {
        rowClick(row){
            this.getEpKeyAreaInfo(row.id)
            
        },
        async getEpKeyAreaInfo(id){
          try {
            const { data } = await getEpKeyAreaInfo(id);
            this.meetingDetail = data;
            this.dialogVisible=true;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
        cellStyle ({row, column, rowIndex, columnIndex}) {
            if (columnIndex == 0){
                return {'color':'#5abbff'}
            }
        },
        async getEpKeyAreaBigData(){
          try {
            const { data } = await getEpKeyAreaBigData();
            this.epKeyAreaBigData = data;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
        async getEpKeyAreaList(num){
          try {
            const { data,count } = await getEpKeyAreaList({
                page:num,
                page_size:this.pageSize
            });
            this.epKeyAreaList = data;
            this.total = count;
          } catch(err){
            this.$message({
              message: err,
              offset: 400,
              type: "error"
            });
          }
        },
        handleClose(done) {
            done();
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