<template>
    <div>
        <el-row class="wrap">
            <el-col :span="10">
                <div class="grid-content bg-purple left">
                    <el-carousel :interval="5000" arrow="always" indicator-position="none">
                    <el-carousel-item v-for="(url,index) in urls" :key="index">
                        <el-image  :src="url" ></el-image>
                    </el-carousel-item>
                </el-carousel>
                <el-row class="t">
                    <el-col :span="24"><div class="grid-content bg-purple">达营子村民主评议会 </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>会议类型</span>民主评议会</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>组织部门</span>党建办公室</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>会议地点</span>会议室</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>会议召开时间</span>2022年2月5号</div></el-col>
                </el-row>
                 <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"><span>主持人</span>李云雁 </div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"><span>参会人员</span>孟凯丽   王炜哲</div></el-col>
                </el-row>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light right">
                   <p>一、支部书记讲话，对党员民主评议工作进行要求</p>
                   <p>根据公司党委的统一安排，自20 2年7月 日，开展党员民主评议工作。评议共分三个阶段，第一阶段为学习教育阶段，支部组织党员认真学习了《党章》、党员先进性具体要求等内容,提高党员对民主评议的认识。第二阶段为自我总结评议阶段，在广泛征求党内外群众意见的基础上，党员认真撰写了个人总结，进行了自我评议。从今天开始进入第三个阶段，进行评议和评比。今天组织全体党员召开党员民主评议会议，请各位党员着重从理想信念、宗旨观念、组织观念、工作态度、工作创新、工作业绩、遵纪守法、团结协作、品德风尚、先锋模范等十个方面进行评议。每个党员要认真对照自身工作，实事求是地开展批评和自我批评，通过评议，在思想上有所触动、行动上有所改进，工作上有所提高、作风上有所转变、纪律上有所增强。</p>
                   <p>二、支部书记总结支部一年来工作情况</p>
                   <p>1、搞好班子建设，提高整体素质;</p>
                   <p>2、搞好党建工作，发挥党员干部作用;</p>
                   <p>3、积极开展保持共产党员先进性教育活动;</p>
                   <p>4、带领职工开拓创新，积极努力完成经营指标;</p>
                   <p>5、搞好工团工作，为经营保驾护航。</p>
                   <p>三、个人发言</p>
                   <p>四、支部书记总结党员民主评议工作</p>
                   <p>刚才全体党员都进行了年度思想、工作和学习方面的总结和评议，各位党员对民主评议的态度十分端正。今天民主评议的会议开的很圆满，希望各位党员以民主评议工作为契机，在本岗位发挥先锋模范作用;克服自身的不足，在日常工作中，</p>
                </div>
            </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
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
.el-image img {
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