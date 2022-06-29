<template>
    <div class="rightContent">
        <div class="top">
            <div class="item">
                <a href="javascript:;">
                    <div class="img">
                        <img src="@/assets/images/partyImg.jpg" alt="">
                    </div>
                    <div class="txt">
                        <p class="name">姓名：李云雁</p>
                        <p>职务：东花园镇党委组织委员兼党建办主任</p>
                        <span>详细</span>
                    </div>
                </a>
            </div>
            <div class="txt">
                <p class="title">简介</p>
                <p>李云雁，男，汉族，1964年11月生，江苏苏州人，1985年6月加入中国共产党，1987年8月参加工作，南京师范大学生物系生物专业毕业，大学学历。</p>
            </div>
            <div class="txt">
                <p class="title">履历</p>
               <p>1983.09--1985.09苏州师范专科学校生化科生物专业学习</p>
               <p>1983.09--1985.09苏州师范专科学校生化科生物专业学习</p>
               <p>1983.09--1985.09苏州师范专科学校生化科生物专业学习</p>
               <p>1983.09--1985.09苏州师范专科学校生化科生物专业学习</p>
            </div>
        </div>
        <ul class="personList">
                <li v-for="(item,index) in personData" :key="index" @click="dialogVisible = true" class="item">
                    <a href="javascript:;">
                        <div class="img">
                            <img :src="item.imgSrc" alt="">
                        </div>
                        <div class="txt">
                            <p class="name">姓名：{{item.name}}</p>
                            <p>职务：{{item.post}}</p>
                            <span>详细</span>
                        </div>
                    </a>
                </li>
            </ul>
            <el-dialog
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <party-member></party-member>
            </el-dialog>
    </div> 
</template>

<script>
import partyMember from '@/components/partyBuilding/popup/partyMember.vue'
export default {
    name: 'organizationalStructure',

    data() {
        return {
             personData:[
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党建办公室科员"
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党政综合办公室主任",
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党建办公室科员"
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党政综合办公室主任",
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党建办公室科员"
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党政综合办公室主任",
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党建办公室科员"
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/partyImg.jpg"),
                    post:"党政综合办公室主任",
                }
             ],
             dialogVisible:false,
        };
    },
    components:{
        partyMember
    },
    mounted() {
        
    },

    methods: {
        handleClose(done) {
            done();
        }
    },
};
</script>

<style scoped>
    .top{
        background: url("@/assets/images/organizationTopBg.png") no-repeat center center;
         background-size:100% 100%;
         padding:35px 0 22px 23px;
         display: flex;
         justify-content: space-between;
         margin-top:70px;
    }
    .top .item{
        width:25%;
    }
    .top .txt{
        color:#fefefe;
        font-size: 16px;
        width:34%;

    }
    .top .txt .title{
        color:#7de2f6;
        font-size: 18px;
        margin-bottom:15px;
    }
    .personList{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width:100%;
        margin-top:60px;
    }
    .personList li{
        width:23%;
        background: url("@/assets/images/organizationBg.png") no-repeat center center;
        background-size:100% 100%;
        padding:34px 34px 20px 12px;
        margin-bottom:34px;
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