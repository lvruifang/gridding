<template>
    <div class="rightContent">
        <div class="partyMember">
            <p class="title">党委成员</p>
             <ul class="personList">
                <li v-for="(item,index) in partyList" :key="index" @click="getDetail(item.id)" class="item">
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
        </div>
        <div class="villageMember">
            <div class="title">村委成员</div>
             <ul class="personList">
                <li v-for="(item,index) in villageList" :key="index" @click="getDetail(item.id)" class="item">
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
        </div>
         <el-dialog
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <party-member :data= detailData></party-member>
        </el-dialog>
    </div>
</template>

<script>
import partyMember from '@/components/partyBuilding/popup/partyMember.vue'
import {getTwoCommitteesCadreList,getTwoCommitteesCadreInfo} from "@/api/party";
import { mapState} from "vuex";
export default {
    name: 'personnelAdministration',
    data() {
        return {
             dialogVisible:false,
             detailData:{}, //人员详情数据
             partyList:[], //党委成员
             villageList:[] //村委成员
        };
    },
     components:{
        partyMember
    },
    mounted() {
        
    },
    created(){
        if(this.$store.state.menu.id.indexOf("_")!==-1){
          this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
          this.getTwoCommitteesCadreList(this.id)
      }
    },
    methods: {
         handleClose(done) {
            done();
        },
        async getTwoCommitteesCadreList(){
          try{
            const {data} = await getTwoCommitteesCadreList(this.id);
            this.villageList = data.villageList;
            this.partyList = data.partyList;
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "error"
                });
            }
        },
        async getDetail(id){
            try{
                const {data} = await getTwoCommitteesCadreInfo(id);
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
    },
     watch: {
    '$store.state.menu': {
      deep: true, //深度监听
      handler(newValue, oldValue) {
        console.log(newValue,oldValue,"333")
        this.id = newValue.id
         if(this.id.indexOf("_")!==-1){
          this.id = this.id.substr(this.id.indexOf("_")+1);
         }
        if(newValue.name == "lwgbgl"){
            this.getTwoCommitteesCadreList()
        }
        
      },
    },
}
};
</script>

<style scoped>
    .title{
            width:50%;
            height:40px;
            line-height: 40px;
            font-size:24px;
            color:#fff;
            font-weight:bold;
            text-align: center;
            background-image: linear-gradient( to right, rgba(0,88,179,0) 0%, rgba(0,88,179,1) 50%,rgba(0,88,179,0) 100%);
            margin:0 auto 35px;
    }
    .rightContent,.villageMember{
        margin-top:60px;
    }
     .personList{
        display: flex;
        
        flex-wrap: wrap;
        width:100%;
        margin-top:60px;
    }
    .personList li{
        width:25%;
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