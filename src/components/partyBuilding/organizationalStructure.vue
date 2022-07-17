<template>
    <div class="rightContent">
        <div class="top">
            <div class="left">
                <div class="title">
                    {{organizationStructureInfo.organization}}
                </div>
                <p>{{organizationStructureInfo.address}}</p>
            </div>
            <div class="right">
                <div class="title">
                    简介
                    <a @click="getDetail1()" href="javascript:;">详细</a>
                </div>
                <p>{{organizationStructureInfo.intro}}</p>
            </div>
        </div>
        <ul class="personList">
            <li v-for="(item,index) in personData" :key="index" @click="getDetail(item.id)" class="item">
                <a href="javascript:;">
                    <div class="img">
                        <img :src="item.picture" alt="">
                    </div>
                    <div class="txt">
                        <p class="name">姓名：{{item.name}}</p>
                        <p>职务：{{item.post}}</p>
                        <span>详细</span>
                    </div>
                </a>
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
        <el-dialog
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <party-member :data=detailData></party-member>
        </el-dialog>

        </el-pagination>
        <el-dialog
        :visible.sync="dialogVisible1"
        width="80%"
        :before-close="handleClose">
        <organization-structure-info :data = organizationStructureInfo></organization-structure-info>
        </el-dialog>
    </div> 
</template>

<script>
import partyMember from '@/components/partyBuilding/popup/partyMember.vue'
import organizationStructureInfo from '@/components/partyBuilding/popup/organizationStructureInfo.vue'
import {organizationStructureMemberList,getOrganizationStructureMemberInfo,getOrganizationStructureInfo } from "@/api/party";
import { mapState} from "vuex";
export default {
    name: 'organizationalStructure',

    data() {
        return {
             personData:[], //人员列表 
             dialogVisible:false,
             id:"",
             total:1000,
             pageSize:8,
             detailData:{}, //人员详情数据
             organizationStructureInfo:{}, //组织架构详情数据
             dialogVisible1:false
        };
    },
    components:{
        partyMember,
        organizationStructureInfo
    },
    mounted() {
       
    },
    created(){
         if(this.$store.state.menu.id.indexOf("_")!==-1){
          this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
           this.getOrganizationStructureMemberList(1);
            this.getOrganizationStructureInfo()
         }
       
    },
    methods: {
        currentChange(num){
            this.getOrganizationStructureMemberList(num)
        },
        handleClose(done) {
            done();
        },
        async getOrganizationStructureMemberList(num){
            try{
                let param = {
                    id:this.id,
                    page_size:this.pageSize,
                    page:num
                }
                const {data,count} = await organizationStructureMemberList(param);
               this.personData = data;
               this.total = count
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        },
        async getDetail(id){
            
            try{
                const {data} = await getOrganizationStructureMemberInfo(id);
                this.detailData = data;
                 this.dialogVisible = true
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        },
        getDetail1(){
             this.dialogVisible1 = true
        },
        async getOrganizationStructureInfo(){
             try{
                const {data} = await getOrganizationStructureInfo(this.id);
                this.organizationStructureInfo = data;
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        }
    },
    watch: {
    '$store.state.menu': {
      deep: true, //深度监听
      handler(newValue, oldValue) {
        this.id = newValue.id
         if(this.id.indexOf("_")!==-1){
          this.id = this.id.substr(this.id.indexOf("_")+1);
         }
        if(newValue.name == "zzjg"){
            this.getOrganizationStructureMemberList(1);
            this.getOrganizationStructureInfo()
        }
        
      },
    },
  },
};
</script>

<style scoped>
    .top{
        background: url("@/assets/images/organizationTopBg.png") no-repeat center center;
         background-size:100% 100%;
         padding:0 35px;
         height:205px;
         align-items: center;
         display: flex;
         justify-content: space-between;
         margin-top:70px;
         position: relative;
    }
    .top .left{
        text-align: center;
        width:321px;
     }
    .top .left .title{
        font-size: 40px;
        font-weight:bold;
        color:#92d5ff;
        margin-bottom: 10px;
        
    }
    .top .left p{
        font-size: 20px;
        color:#92d5ff;
    }
    .top .right{
        flex:1;
        padding-left:57px;
        font-size: 16px;
        color:#fff;
        line-height: 1.7;
    }
    .top .right a{
        display: block;
        width:112px;
        height:31px;
        line-height: 31px;
        text-align: center;
        font-size: 16px;
        color:#fefefe;
        border-radius: 31px;
        background-image: linear-gradient( to right, rgba(81,29,175,0.5), rgba(35,215,254,0.5));
       position: absolute;
       right:42px;
       top:32px;
    }
    .top .right .title{
        font-size: 18px;
        color:#7de2f6;
        margin-bottom:24px;
    }
    .personList{
        display: flex;
        flex-wrap: wrap;
        width:100%;
        margin-top:60px;
    }
    .personList li{
        width:23%;
        background: url("@/assets/images/organizationBg.png") no-repeat center center;
        background-size:100% 100%;
        padding:34px 34px 20px 12px;
        margin:0 1% 34px;
    }
    .item .img{
        width:109px;
        height:136px;
        margin-right:20px;
    }
    .item .img img{
        width:100%;
        height:100%;
    }
    .item a{
        color:#92d5ff;
        font-size:16px;
        display: flex;

    }
   .item a .name{
        margin:5px 0 10px;
    }
   .item a .txt{
        position:relative;
        flex:1;
        
    }
    .item a .txt span{
        display: block;
        width:87px;
        height:31px;
        line-height: 31px;
        text-align: center;
        font-size: 16px;
        color:#fefefe;
        border-radius: 31px;
        background-image: linear-gradient( to right, rgba(81,29,175,0.5), rgba(35,215,254,0.5));
       position: absolute;
       left:0; bottom:0;
    }
</style>