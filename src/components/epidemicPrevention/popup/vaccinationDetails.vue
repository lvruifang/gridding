<template>
    <div class="wrap">
       <div class="party-head">
            <img src="@/assets/images/partyImg.jpg" alt="">
            <div class="txt">
                <p >姓名：张一山</p>
                <p >电话：18810068960</p>
                <p>所属网格：大南新堡村</p>
                <p>人员类型：常住人口</p>
            </div>
        </div>
        <el-row class="party-info">
            <el-row class="title">
                <el-col :span="24"><div class="grid-content bg-purple">第一针</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">接种时间：2021-3-05</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">疫苗类型：灭活疫苗</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">接种机构：第一人民医院</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">生产厂家：北京科兴</div></el-col>
            </el-row>
        </el-row>
        <el-row class="party-info">
            <el-row class="title">
                <el-col :span="24"><div class="grid-content bg-purple">第二针</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">接种时间：2021-3-05</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">疫苗类型：灭活疫苗</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">接种机构：第一人民医院</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">生产厂家：北京科兴</div></el-col>
            </el-row>
        </el-row>
        <el-row class="party-info">
            <el-row class="title">
                <el-col :span="24"><div class="grid-content bg-purple">第三针</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">接种时间：2021-3-05</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">疫苗类型：灭活疫苗</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">接种机构：第一人民医院</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">生产厂家：北京科兴</div></el-col>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'vaccinationDetails',

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
        width:100%;
        padding-bottom: 26px;
    }
    .party-head{
        display: flex;
        margin-bottom:22px;
        
    }
    .party-head img{
        width:179px;
        height:235px;
        margin-right:35px;
        margin-left:21px;
    }
    .party-head .txt{
        color:#92d5ff;
        line-height: 2;
        flex:1;
        font-size:18px;
        color:#92d5ff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
      .party-info .title{
         height:48px;
         line-height: 48px;
         background-color: rgba(21,23,144,0.5);
         padding:0 20px;
         color:#fff;
         margin-bottom:8px;
         margin-bottom:20px;
         font-size: 18px;

     }
     .party-info{
         background-color:rgba(1,5,46,0.35);
         font-size: 16px;
         color:#fff;
         line-height:1;
         margin-bottom:20px;
     }
     .el-col-12{
         margin-bottom:20px;
         padding-left:36px;
     }
</style>