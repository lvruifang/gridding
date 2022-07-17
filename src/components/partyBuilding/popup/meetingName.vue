<template>
    <div>
        <el-row class="wrap">
            <el-col :span="10">
                <div class="grid-content bg-purple left">
                   <img :src="data.picture" alt="">
                <el-row class="t">
                    <el-col :span="24"><div class="grid-content bg-purple">{{data.name}} </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>会议类型</span>{{data.type}}</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>组织部门</span>{{data.organization_department}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>会议地点</span>{{data.address}}</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>会议召开时间</span>{{data.time}}</div></el-col>
                </el-row>
                 <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>主持人</span>{{data.host}}</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>参会人员</span>{{data.participants}}</div></el-col>
                </el-row>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light right">
                   <p v-html="data.content"></p>
                </div>
            </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
   props: {
        data: Object
    },
  name: "meetingName",

  data() {
    return {
      urls: [
        require("@/assets/images/img.jpg"),
        require("@/assets/images/img.jpg"),
        require("@/assets/images/img.jpg"),
        require("@/assets/images/img.jpg")
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.wrap{
    background: url("@/assets/images/partyPopupBg.png") rgba(8,23,73,0.8) no-repeat center center;
    background-size: 100% 100%;
    padding:70px 40px 40px;
}
.el-carousel__container{
    height:252px;
}
.right {
  padding-left: 80px;
}
.right p {
  font-size: 16px;
  color: #fff;
  line-height: 2;
}
 img {
  width: 100%;
}
.left .el-row {
  height: 42px;
  line-height: 42px;
  background: rgba(86, 87, 179, 0.3);
  color: #fff;
  font-size: 16px;
  margin-top: 13px;
  padding-left: 13px;
  color:#92d5ff;
}
.left .el-row.t{
    height:104px;
    line-height: 104px;
    font-size:36px;
    text-align: center;
}
.el-col-8 {
  font-size: 16px;
  color: #92d5ff;
}
.left span{
    color:#fff;
    margin-right:22px;
}
</style>