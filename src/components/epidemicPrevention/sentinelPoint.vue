<template>
    <div class="rightContent">
        <div class="partyMember">
            <p class="title1">{{gridName}}流调队伍</p>
             <ul class="personList">
                <li v-for="(item,index) in sentinelDoctorList" :key="index" @click="dialogVisible = true" class="item">
                    <a href="javascript:;">
                        <div class="user">
                            <img class="img" :src="item.picture" alt="">
                            <div class="txt">
                                <p class="name">{{item.name}}</p>
                                <p>职业资格：{{item.job}}</p>
                                <p>职业年龄：{{item.job_age}}</p>
                            </div>
                        </div>
                        <div class="des">
                            {{item.expert}}
                        </div>
                    </a>
                </li>
            </ul>
            <el-pagination
            background
            layout="prev, pager, next"
            v-if = "total > 6"
            :total=total
            :page-size=pageSize
            @current-change = "currentChange"
            class="pagination"
            >
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { getSentinelDoctorList } from "@/api/antiepidemic";
export default {
    name: 'sentinelPoint',
    data() {
        return {
             dialogVisible:false,
             id:"",
             sentinelDoctorList:[],
             pageSize:6,
             total:0,
             gridName:""
        };
    },
    created() {
         if(this.$store.state.menu.id.indexOf("_")!==-1){
            this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
            this.getSentinelDoctorList(1);
        }
    },
    methods: {
        handleClose(done) {
            done();
        },
        currentChange(num){
             this.getSentinelDoctorList(num);
        },
        async getSentinelDoctorList(num){
            try{
                let param = {
                    id:this.id,
                    page_size:this.pageSize,
                    page:num
                }
                const {data, count, gridName} = await getSentinelDoctorList(param);
                this.sentinelDoctorList = data;
                this.total = count;
                this.gridName = gridName;
                console.log(data)
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "error"
                });
            }
        },
    },
    watch: {
        '$store.state.menu': {
        deep: true, //深度监听
        handler(newValue, oldValue) {
            this.id = newValue.id
            if(this.id.indexOf("_")!==-1){
            this.id = this.id.substr(this.id.indexOf("_")+1);
            }
            if(newValue.name == "sd"){
            this.getSentinelDoctorList(1);
            }
            
        },
        },
    },
};
</script>

<style scoped>
    .title1{
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
        border-radius: 107px;
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