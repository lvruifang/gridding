<template>
    <div class="rightContent">
        <p class="title">党委成员</p>
        <el-row class="wrap">
            <el-col :span="10">
                <div class="grid-content bg-purple left">
                    <el-carousel :interval="5000" arrow="always" indicator-position="none">
                    <el-carousel-item v-for="(url,index) in urls" :key="index">
                        <el-image  :src="url" ></el-image>
                    </el-carousel-item>
                </el-carousel>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">所属网格</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">大南辛堡村</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">网格员</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">会议室</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">所属上级</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">大南辛堡村</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">党支部级别 </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">党支部</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">党支部负责人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">李云雁</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple">党支部地址 </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">大南幸堡村党委办公室</div></el-col>
                </el-row>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light right">
                    <p>大南幸堡党支部共有党员12名，其中在职党员9名，离岗党员3名。支部党员中有党员领导干部4人，具有中学高级职称的2人，具有中级职称的9人，初级职称的1人；1名研究生，11本科学历。</p>
                    <p>支部委员会由党支部书记、组织委员、宣传委员3人组成。我校党支部把十八大精神和习近平总书记系列讲话贯穿于全体党员教育工作的始终：努力建设一支充满朝气、求真务实、奋发有为、勇于创新的班子队伍；建设一支党性强、奉献精神强、大力探索新模式、新方法、成为学校改革和发展的先锋党员队伍；建设一支具有现代教育理念、教艺精湛、师德高尚、一专多用的教师队伍。以党建促特色，以创新求发展，现正为建设一流的党支部而努力奋斗。</p>
                    <p>支部委员会由党支部书记、组织委员、宣传委员3人组成。我校党支部把十八大精神和习近平总书记系列讲话贯穿于全体党员教育工作的始终：努力建设一支充满朝气、求真务实、奋发有为、勇于创新的班子队伍；建设一支党性强、奉献精神强、大力探索新模式、新方法、成为学校改革和发展的先锋党员队伍；建设一支具有现代教育理念、教艺精湛、师德高尚、一专多用的教师队伍。以党建促特色，以创新求发展，现正为建设一流的党支部而努力奋斗。</p>
                </div>
            </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
  name: "organizationManagement",

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