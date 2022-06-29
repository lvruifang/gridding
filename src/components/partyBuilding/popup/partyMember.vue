<template>
    <div class="wrap">
		<div class="party-head">
            <img src="@/assets/images/partyImg.jpg" alt="">
            <div class="txt">
                <p class="title">李云雁</p>
                <p class="mark">党建办公室主任</p>
                <p>担任职务：村书记、村主任</p>
                <p>是否交叉任职 ：  是</p>
            </div>
        </div>
        <el-row class="party-info">
            <el-col :span="12"><div class="grid-content bg-purple">性别：男</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">出生日期：1987/8/10</div></el-col>
        </el-row>
        <el-row class="party-info">
            <el-col :span="12"><div class="grid-content bg-purple">民族：汉</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">学历：大专</div></el-col>
        </el-row>
        <div class="party-resume">
            <p class="title">人物履历</p>
            <p>2005.12--2006.06江苏省昆山市委副书记、市长，昆山经济技术开发区管委会主任</p>
            <p>2006.06--2011.04江苏省昆山市委书记、昆山经济技术开发区党工委书记</p>
            <p>2011.04--2012.01江苏省南通市委副书记、代市长</p>
            <p>2012.01--2016.01江苏省南通市委副书记、市长</p>
            <p>2016.01--2017.02江苏省徐州市委书记</p>
            <p>2017.02--2018.01江苏省徐州市委书记，市人大常委会主任 [2] </p>
            <p>2018.01--2020.04云南省副省长 [1] </p>
            <p>2020.04--2020.06云南省委常委、统战部部长，副省长 [4]</p>
        </div>
	</div>
</template>

<script>
export default {
    name: 'partyMember',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
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