<template>
    <div class="rightContent">
       <el-row  class="top">
           <p class="title">核算采集点数据统计</p>
            <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/hsjc.png" alt="">
                    <span>核酸采集点总数</span>
                    <span class="num">{{numCount.totalCount}}</span>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/yy.png" alt="">
                    <span>公立医院</span>
                    <span class="num" style="color:#ffc70c;">{{numCount.hospitalCount}}</span>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/sq.png" alt="">
                    <span>社区采集点</span>
                    <span class="num" style="color:#92d5ff;">{{numCount.communityCount}}</span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/yljg.png" alt="">
                    <span>临时采集点</span>
                    <span class="num" style="color:#92d5ff;">{{numCount.temporaryCount}}</span>
                </div>
            </el-col>
        </el-row>
        <ul class="cjdWrap">
            <li v-for="(item) in nucleicAcidTestPointLis" :key="item.id">
                <img :src="item.picture" alt="">
                <p class="t">{{item.name}}</p>
                <p>地址：{{item.address}}电话：{{item.contact}}</p>
            </li>
        </ul>
        <el-pagination
        background
        layout="prev, pager, next"
        v-if = "total > 8"
        :total=total
        :page-size=pageSize
        @current-change = "currentChange"
        class="pagination"
        >
        </el-pagination>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { getNucleicAcidTestPointList } from "@/api/antiepidemic";
export default {
    name: 'hsCollectionPoint',

    data() {
        return {
            nucleicAcidTestPointLis: [],
            pageSize:8,
            total:0,
            numCount:{}
        };
    },

    created() {
        this.getNucleicAcidTestPointList(1)
    },

    methods: {
        currentChange(num){
            this.getNucleicAcidTestPointList(num)
        },
         async getNucleicAcidTestPointList(num){
          try {
            const { data,count,numCount} = await getNucleicAcidTestPointList({
                page:num,
                page_size:this.pageSize
            });
            this.nucleicAcidTestPointLis = data;
            this.total = count;
            this.numCount = numCount
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
    .top{
        width:100%;
        height:148px;
        background:url("@/assets/images/hscjdBg.png") no-repeat ;
        background-size:100% 100%;
        margin-top:90px;
        padding-right:100px;
        position: relative;
       
    }
    .title{
        position: absolute;
        left:5px;
        top:-11px;
        font-size: 20px;
        color:#92d5ff;
    } 
    .list{
        width:100%;
        height:100%;
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 22px;
        color:#d4eaf6;

    }
    .list img{
        width:82px;
    }
    .list .num{
        font-size:40px;
        color:#e73851;
        margin-left:15px;
    }
    .el-col-6{
        height:100%;
    }
    .cjdWrap{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top:30px;
    }
    li{
        width:24%;
        background:url("@/assets/images/hscjdItemBg.png") no-repeat;
        background-size:100% 100%;
        font-size: 16px;
        padding:9px;
        line-height: 1.7;
        margin-bottom:30px;
    }
    li .t{
        font-size: 18px;
        color:#92d5ff;
        padding-left:5px;
    }
    li img{
        width:100%;
    }
</style>