<template>
    <div class="rightContent">
        <p class="title">党委成员</p>
        <el-row class="wrap">
            <el-col :span="10">
                <div class="grid-content bg-purple left">
                    <!-- <el-carousel :interval="5000" arrow="always" indicator-position="none">
                    <el-carousel-item v-for="(url,index) in urls" :key="index">
                        <el-image  :src="url" ></el-image>
                    </el-carousel-item>
                </el-carousel> -->
                  <img :src="partyOrganizationInfo.picture" style="width:100%;height:300px;" alt="">
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">所属网格</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{partyOrganizationInfo.one_name}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">网格员</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{partyOrganizationInfo.one_member}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">所属上级</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{partyOrganizationInfo.superior}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">党支部级别 </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{partyOrganizationInfo.classification}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">党支部负责人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{partyOrganizationInfo.head}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">党支部地址 </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{partyOrganizationInfo.address}}</div></el-col>
                </el-row>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light right">
                    <p>{{partyOrganizationInfo.intro}}</p>
                </div>
            </el-col>
    </el-row>
    </div>
</template>

<script>
import {getPartyOrganizationInfo} from "@/api/party";
import { mapState} from "vuex";
export default {
  name: "organizationManagement",

  data() {
    return {
      id:"",
      // urls: [
      //   require("@/assets/images/img.jpg"),
      //   require("@/assets/images/img.jpg"),
      //   require("@/assets/images/img.jpg"),
      //   require("@/assets/images/img.jpg")
      // ],
      partyOrganizationInfo:{

      }
    };
  },
  created(){
     if(this.$store.state.menu.id.indexOf("_")!==-1){
          this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
          this.getPartyOrganizationInfo()
      }
      
  },
  mounted() {
    
  },

  methods: {

     async getPartyOrganizationInfo(){
          try{
            const {data} = await getPartyOrganizationInfo(this.id);
            this.partyOrganizationInfo = data;
            
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
        console.log(newValue,oldValue,"333")
        this.id = newValue.id
         if(this.id.indexOf("_")!==-1){
          this.id = this.id.substr(this.id.indexOf("_")+1);
         }
        if(newValue.name == "dzzgl"){
            this.getPartyOrganizationInfo()
        }
        
      },
    },
}
}
</script>

<style scoped>
.el-carousel__container{
    height:352px;
}
.el-carousel__arrow{
    font-size:25px;
    color:#fff;
}
.wrap {
  padding: 34px 60px 20px;
  background: url("@/assets/images/dzzglBg.png") rgba(8, 23, 73, 0.6) no-repeat
    center center;
  background-size: 100% 100%;
}

.title {
  width: 50%;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgba(0, 88, 179, 0) 0%,
    rgba(0, 88, 179, 1) 50%,
    rgba(0, 88, 179, 0) 100%
  );
  margin: 60px auto 30px;
}
.right {
  padding-left: 80px;
}
.right p {
  font-size: 16px;
  color: #fff;
  margin-top: 35px;
}
.el-image img {
  width: 100%;
}
.left .el-row {
  height: 42px;
  line-height: 42px;
  background: rgba(22, 58, 178, 0.3);
  color: #fff;
  font-size: 16px;
  margin-top: 13px;
  padding-left: 13px;
}
.el-col-8 {
  font-size: 16px;
  color: #92d5ff;
}
</style>