<template>
    <div class="rightContent">
        <div class="partyMember">
            <p class="title">党委成员</p>
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
        </div>
        <div class="villageMember">
            <div class="title">村委成员</div>
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
        </div>
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
    name: 'personnelAdministration',
    data() {
        return {
             dialogVisible:false,
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
                }
             ],
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