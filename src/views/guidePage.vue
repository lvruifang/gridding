/* <template>
    <div class="guide">
        <!-- <router-link to="/zhdj/zzjg">智慧党建</router-link>
        <router-link to="/zhwg">智慧网格</router-link>
        <button>智慧防疫</button>
        <button>智慧地图</button> -->
        <a href="javascript:;" class="logout" @click="logout">退出</a>
        <div class="title">
            <img  src="@/assets/images/logo.png">
            <div class="txt">
                <h2>欢迎进入东花园镇智慧网格系统</h2>
                <p>Welcome  to  the  smart  grid  system  of  donghuayuan  town</p>
            </div>
		    </div>
        <div class="list">
            <ul>
                <li @click="go('/zhdj/zzjg')">
                    <a href="javascript:;">
                        <i class="iconfont icon-dangjian-"></i>
						            <p class="t">智慧党建</p>
                        <p class="tabT">组织架构</p>
                        <div class="zzjgTab">
                            <span>党委</span>
                            <span>政府</span>
                            <span>人大</span>
                            <span>各科室</span>
                        </div>
                        <p class="tabT">村级组织运行机构</p>
                        <el-row :gutter="0" class="cjzzTab">
                        <el-col :span="7"><div class="grid-content bg-purple">村党组织</div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple">村民委员会</div></el-col>
                        <el-col :span="10"><div class="grid-content bg-purple">村务监督委员会</div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple">村民代表会</div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple">村和谐促进会</div></el-col>
                        <el-col :span="10"><div class="grid-content bg-purple">村集体经济合作组织</div></el-col>
                        </el-row>
                        <p class="tabT">党员管理</p>
                        <p class="tabT">会议管理</p>
                    </a>
                </li> 
                <li class="zhwg" @click="go('/zhwg/sy')">
                    <a href="javascript:;">
                        <i class="iconfont icon-24gf-appsBig4"></i>
						            <p class="t">智慧网格</p>
                        <div class="inner">
                            <div class="tab">
                            <p class="tabT">街村</p>
                            <p class="tabT">社区</p>
                            <span class="num">3</span>
                        </div>
                        <p class="tabT">商业街 </p>
                         <p class="tabT">企业  <span class="num">1</span></p>
                        <p class="tabT">其他  <span class="num">X</span></p>
                        <div class="zzjgTab">
                            <span>部队</span>
                            <span>科研机构</span>
                            <span>大杂院</span>
                        </div>
                        </div>
                    </a>
                </li>
                 <li @click="go('/zhfy/lddw')">
                    <a href="javascript:;">
                        <i class="iconfont icon-fangyi"></i>
						            <p class="t">智慧防疫</p>
						            <p class="tabT">流动人员</p>
                        <p class="tabT">重点防疫点</p>
                        <div class="zzjgTab">
                            <span>酒店</span>
                            <span>学校</span>
                            <span>养老院</span>
                        </div>
                        <p class="tabT">流调队伍</p>
                        <p class="tabT">核酸采集点</p>
                        <p class="tabT">疫苗信息</p>
                                </a>
                            </li>
                            <li @click="go('/bigData/djfx')">
                                <a href="javascript:;">
                                    <i class="iconfont icon-ditu"></i>
                        <p class="t">智慧地图</p>
                        <p class="tabT">数据总览</p>
                        <p class="tabT">流调队伍</p>
                        <p class="tabT">核酸采集点</p>
                        <p class="tabT">疫苗信息</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import "@/assets/font/iconfont.css";
import { logout } from '@/api/user'
export default {
  name: "guidePage",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    go(url) {
      this.$router.push({ path: url });
    },
    async logout (){
      try {
        await logout();
        this.$router.push({name:"login"})
      } catch (err) {
          this.$message({
          message: err.msg,
          offset:400,
          type: 'success'
          });
      }
    }
  },
  beforeCreate() {}
};
</script>

<style scoped>
.guide{
  position: relative;
}
.logout{
  position: absolute;
  display: block;
  width:86px;
  height:32px;
  border-radius: 32px;
  text-align: center;
  line-height:32px;
  font-size:16px;
  color:#43c8ff;
  font-weight:bold;
  right: 30px;
  top:23px;
  border:solid 1px #308fbd;
  box-shadow: 0px 0px 4px  rgba(62, 197, 255, 0.58);
}
.guide h2,
.guide .txt p {
  font-family: "Microsoft JhengHei";
  font-size: 46px;
  background-image: linear-gradient(
    to bottom,
    rgba(9, 115, 201, 0.94),
    rgba(127, 238, 255, 0.94)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.guide .title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.guide .title img {
  margin-right: 45px;
  width: 140px;
}
.guide .txt {
  text-align: center;
}
.guide .txt p {
  font-size: 18px;
  text-transform: uppercase;
  width: 100%;
  word-spacing: 8px;
  margin-top: 13px;
}
.guide .list {
  width: 100%;
  padding: 0 3%;
  margin-top: 80px;
}
.guide .list ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.guide .list ul li {
  width: 23%;
  transition: all 0.3s;
}
.guide .list ul li a {
  display: block;
  border: solid 1px rgba(36, 107, 148, 0.94);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  height: 618px;
  background-image: linear-gradient(
    to bottom,
    rgba(3, 17, 43, 0.5),
    rgba(27, 7, 109, 0.5)
  );
  transition: all 0.3s;
}
.guide .list ul li a .t {
  font-size: 43px;
  margin-bottom: 33px;
  color: #92d5ff;
}
.guide .list ul li:hover {
  transform: scale(1.1);
}
.guide .list ul li:hover a {
  background: url("@/assets/images/guideItemBg.png") no-repeat center center;
  background-size: 100% 100%;
}
.guide .iconfont {
  font-size: 63px;
  line-height: 1;
  background-image: linear-gradient(
    -12deg,
    #583ded 0%,
    #128cfa 34%,
    #30f9ff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  margin-top: 70px;
  transition: all 0.3s;
}
.guide .list ul li:hover .iconfont {
  background-image: linear-gradient(
    -12deg,
    #32146e 0%,
    #ff241c 34%,
    #fee764 90%,
    #fffbe2 100%
  );
}
.guide .tabT {
  width: 184px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 30px;
  background-image: linear-gradient(
    to right,
    rgba(81, 29, 175, 0.7),
    rgba(35, 215, 254, 0.7)
  );
  font-size: 17px;
  margin: 0 auto 22px;
}
.guide .zhwg .tabT {
  width: 100px;
  margin: 0 0 59px 0;
  position: relative;
}
.guide .zhwg .inner {
  width: 226px;
  margin-left: 47px;
}
.guide .zhwg .inner .zzjgTab {
  margin-top: -40px;
}
.guide .zhwg .inner .tab {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.guide .zhwg span.num {
  position: absolute;
  width: 36px;
  height: 36px;
  background: url("@/assets/images/number.png") no-repeat center center;
  background-size: 100% 100%;
  left: -56px;
  top: 0;
  font-size: 16px;
  color: #43c8ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.guide .zhwg .inner .tab .tabT {
  margin-bottom: 22px;
}
.zzjgTab {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.zzjgTab span {
  margin: 0 15px;
}
.cjzzTab {
  font-size: 14px;
  padding: 0 20px;
  margin-bottom: 40px;
}
</style> */