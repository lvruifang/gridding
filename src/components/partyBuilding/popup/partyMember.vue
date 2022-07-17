<template>
    <div class="wrap">
		<div class="party-head">
            <img :src="data.picture" alt="">
            <div class="txt">
                <p class="title">{{data.name}}</p>
                <p class="mark">{{data.intro}}</p>
                
                <p>担任职务：{{data.post}}</p>
                <p>是否交叉任职 ：  {{data.cross_appointment}}</p>
            </div>
        </div>
        <el-row class="party-info">
            <el-col :span="12"><div class="grid-content bg-purple">性别：{{data.sex}}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">出生日期：{{data.birth}}</div></el-col>
        </el-row>
        <el-row class="party-info">
            <el-col :span="12"><div class="grid-content bg-purple">民族：{{data.nation}}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">学历：{{data.education}}</div></el-col>
        </el-row>
        <div class="party-resume">
            <p class="title">人物履历</p>
            <p v-html="data.resume"></p>
        </div>
	</div>
</template>

<script>
// import {organizationStructureInfo } from "@/api/party";
// import { mapState} from "vuex";
export default {
    props: {
        data: Object
    },
    name: 'partyMember',

    data() {
        return {
            id:"",
        };
    },

    mounted() {
        
    },

    methods: {
        // async getOrganizationStructureInfo(){
        //     try{
        //         const {data} = await organizationStructureInfo(this.id);
        //         console.log(data,"111")
        //     }catch(err){
        //         this.$message({
        //         message: err,
        //         offset: 400,
        //         type: "success"
        //         });
        //     }
        // }
    },
//     watch: {
//     '$store.state.menu': {
//       deep: true, //深度监听
//       handler(newValue, oldValue) {
//         console.log(newValue,oldValue)
//         this.id = newValue.id
//          if(this.id.indexOf("_")!==-1){
//           this.id = this.id.substr(this.id.indexOf("_")+1);
//          }
//         if(newValue.name == "zzjg"){
//             this.getOrganizationStructureInfo()
//         }
        
//       },
//     },
//   },
};
</script>

<style scoped>
    .wrap{
    background: url("@/assets/images/partyPopupBg.png") rgba(8,23,73,0.8) no-repeat center center;
    background-size: 100% 100%;
    padding:70px 40px 40px;
}
    .party-head{
        display: flex;
        margin-bottom:22px;
        
    }
    .party-head img{
        width:160px;
        height:200px;
        margin-right:13px;
    }
    .party-head .txt{
        background-color: rgba(21,23,144,0.5);
        padding-left:27px;
        color:#92d5ff;
        line-height: 2;
        flex:1;
    }
    .party-head .txt .title{
        font-size: 22px;
        padding-top:12px;
    }
     .party-head .txt .mark{
         font-size: 18px;
         margin-bottom:18px;
         max-height:72px;
         overflow-y: scroll;
     }
     .el-row{
         height:48px;
         line-height: 48px;
         background-color: rgba(21,23,144,0.5);
         padding:0 20px;
         color:#92d5ff;
         margin-bottom:8px;
     }
     .party-resume .title{
         font-size: 20px;
         color:#92d5ff;
         margin:25px 0
     }
      .party-resume p{
          color:#fff;
          font-size: 16px;
          line-height: 1.7;
      }
</style>