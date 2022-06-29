<template>
    <div class="rightContent">
        <div class="partyMember">
            <p class="title">大南幸堡村流调队伍</p>
             <ul class="personList">
                <li v-for="(item,index) in personData" :key="index" @click="dialogVisible = true" class="item">
                    <a href="javascript:;">
                        <div class="img">
                            <img :src="item.imgSrc" alt="">
                            <span>队长</span>
                        </div>
                        <div class="txt">
                            <p class="name">姓名：{{item.name}}</p>
                            <p>电话：{{item.phone}}</p>
                            <p>职业：{{item.post}}</p>
                            <p>学历：{{item.education}}</p>
                            
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
    name: 'loseTeam',
    data() {
        return {
             dialogVisible:false,
             personData:[
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"公务员",
                    education:"大专",
                    phone:"18810068960"
                },
                 {
                   name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"公务员",
                    education:"大专",
                    phone:"18810068960"
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"医生",
                    education:"大专",
                    phone:"18810068960"
                },
                 {
                   name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"公务员",
                    education:"大专",
                    phone:"18810068960"
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"医生",
                    education:"大专",
                    phone:"18810068960"
                },
                 {
                   name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"公务员",
                    education:"大专",
                    phone:"18810068960"
                },
                 {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"医生",
                    education:"大专",
                    phone:"18810068960"
                },
                 {
                   name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    post:"公务员",
                    education:"大专",
                    phone:"18810068960"
                },
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
        padding:25px 25px 25px 30px;
        margin-bottom:34px;
    }
    .item .img{
        width:107px;
        margin-right:20px;
    }
    .item .img img{
        width:100%;
        height:107px;
    }
    .item a{
        color:#92d5ff;
        font-size:16px;
        display: flex;

    }

   .item a .txt{
        position:relative;
        flex:1;
        line-height: 2.1;
        font-size: 18px;
        
    }
    .item a .img span{
        display: block;
        width:70px;
        height:24px;
        line-height: 24px;
        text-align: center;
        font-size: 16px;
        color:#fefefe;
        border-radius: 31px;
        background-image: linear-gradient( to right, rgba(81,29,175,0.5), rgba(35,215,254,0.5));
        margin:15px auto 0;
    }
</style>