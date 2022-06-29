<template>
    <div class="rightContent">
        <div class="partyMember">
            <p class="title">大南幸堡村流调队伍</p>
             <ul class="personList">
                <li v-for="(item,index) in personData" :key="index" @click="dialogVisible = true" class="item">
                    <a href="javascript:;">
                        <div class="user">
                            <img class="img" :src="item.imgSrc" alt="">
                            <div class="txt">
                                <p class="name">{{item.name}}</p>
                                <p>职业资格：{{item.vocation}}</p>
                                <p>职业年龄：{{item.age}}</p>
                            </div>
                        </div>
                        <div class="des">
                            {{item.txt}}
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
    name: 'sentinelPoint',
    data() {
        return {
             dialogVisible:false,
             personData:[
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    vocation:"医师",
                    age:"15年",
                    txt:"擅长：糖尿病、甲状腺疾病，肾上腺疾病，妊娠合并甲亢，妊娠合并甲低，妊娠糖尿病，难治性高血压，骨质疏松及钙磷代谢疾病"
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    vocation:"医师",
                    age:"15年",
                    txt:"擅长：糖尿病、甲状腺疾病，肾上腺疾病，妊娠合并甲亢，妊娠合并甲低，妊娠糖尿病，难治性高血压，骨质疏松及钙磷代谢疾病"
                },
               {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    vocation:"医师",
                    age:"15年",
                    txt:"擅长：糖尿病、甲状腺疾病，肾上腺疾病，妊娠合并甲亢，妊娠合并甲低，妊娠糖尿病，难治性高血压，骨质疏松及钙磷代谢疾病"
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    vocation:"医师",
                    age:"15年",
                    txt:"擅长：糖尿病、甲状腺疾病，肾上腺疾病，妊娠合并甲亢，妊娠合并甲低，妊娠糖尿病，难治性高血压，骨质疏松及钙磷代谢疾病"
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    vocation:"医师",
                    age:"15年",
                    txt:"擅长：糖尿病、甲状腺疾病，肾上腺疾病，妊娠合并甲亢，妊娠合并甲低，妊娠糖尿病，难治性高血压，骨质疏松及钙磷代谢疾病"
                },
                {
                    name:"王炜哲",
                    imgSrc:require("@/assets/images/person.png"),
                    vocation:"医师",
                    age:"15年",
                    txt:"擅长：糖尿病、甲状腺疾病，肾上腺疾病，妊娠合并甲亢，妊娠合并甲低，妊娠糖尿病，难治性高血压，骨质疏松及钙磷代谢疾病"
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
        width:32%;
        background: url("@/assets/images/organizationBg.png") no-repeat center center;
        background-size:100% 100%;
        padding:25px 25px 25px 30px;
        margin-bottom:34px;
    }
    .item .user{
       display: flex;
        height:107px;
        width:100%;
        align-items: center;
        margin-bottom: 25px;

    }
    .item .user .name{
        font-size: 20px;
        color:#92d5ff;
    }
    .item .user img{
        width:107px;
        height:107px;
        margin-right:23px;
    }
    .item .user .txt{
        color:#fff;
        font-size:16px;
        line-height: 2;
    }
    .item a{
        color:#92d5ff;
        font-size:16px;
        

    }

   .item a .des{
        line-height: 1.7;
        font-size: 16px;
        
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