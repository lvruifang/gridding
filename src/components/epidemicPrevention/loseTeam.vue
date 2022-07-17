<template>
    <div class="rightContent">
        <div class="partyMember">
            <p class="title1">{{gridName}}流调队伍</p>
             <ul class="personList">
                <li v-for="(item,index) in flowTeamMemberList" :key="index" @click="dialogVisible = true" class="item">
                    <a href="javascript:;">
                        <div class="img">
                            <img :src="item.picture" alt="">
                            <span>{{item.captain}}</span>
                        </div>
                        <div class="txt">
                            <p class="name">姓名：{{item.name}}</p>
                            <p>电话：{{item.mobile}}</p>
                            <p>职业：{{item.job}}</p>
                            <p>学历：{{item.education}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <el-pagination
            background
            layout="prev, pager, next"
            v-if = "total > 8"
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
import { getFlowTeamMemberList } from "@/api/antiepidemic";
export default {
    name: 'loseTeam',
    data() {
        return {
            dialogVisible:false,
            id:"",
            flowTeamMemberList:[],
            pageSize:8,
            total:0,
            gridName:""
        };
    },
    created(){
        if(this.$store.state.menu.id.indexOf("_")!==-1){
            this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
            this.getFlowTeamMemberList(1);
        }
    },
    mounted() {
        
    },

    methods: {
         handleClose(done) {
            done();
        },
         currentChange(num){
             this.getFlowTeamMemberList(num);
        },
        async getFlowTeamMemberList(num){
            try{
                let param = {
                    id:this.id,
                    page_size:this.pageSize,
                    page:num
                }
                const {data, count, gridName} = await getFlowTeamMemberList(param);
                this.flowTeamMemberList = data;
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
            if(newValue.name == "lddw"){
            this.getFlowTeamMemberList(1);
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