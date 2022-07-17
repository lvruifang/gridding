<template>
    <div class="rightContent">
            <el-row :gutter="20" class="dyglEcharts">
                <el-col :span="8"> 
                    <h2>党员类型</h2>
                    <party-type  :data="partyMemberCategory"></party-type>
                </el-col>
                <el-col :span="8"> 
                    <h2>党员年龄</h2>
                    <party-age  :data="partyMemberAge" ></party-age>
                </el-col>
                <el-col :span="8"> 
                    <h2>学历结构</h2>
                    <educational-structure  :data="partyMemberEducation"></educational-structure>
                </el-col>
            </el-row>
            <ul class="personList">
                <li v-for="(item,index) in partyMemberList" :key="index" @click="getDetail(item.id)">
                    <a href="javascript:;">
                        <img :src="item.picture" alt="">
                        <p>{{item.name}}</p>
                        <span>详细</span>
                    </a>
                </li>
            </ul>
            <div class="pagination">
                <el-pagination
                background
                v-if = "total > 16"
                layout="prev, pager, next"
                :total=total
                :page-size=pageSize
                @current-change = "currentChange"
                class="pagination"
                >
                </el-pagination>
            </div>
            <el-dialog
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <party-member :data = partyMemberInfo></party-member>
            </el-dialog>

           
    </div>
</template>

<script>
import partyType from '@/components/partyBuilding/echartsComponent/partyType'
import partyAge from '@/components/partyBuilding/echartsComponent/partyAge'
import educationalStructure from '@/components/partyBuilding/echartsComponent/educationalStructure'
import partyMember from '@/components/partyBuilding/popup/partyMember.vue'
import {getPartyMemberBigData,getPartyMemberList,getPartyMemberInfo } from "@/api/party";
import { mapState} from "vuex";
export default {
    name: 'PartyManagement',
    data() {
        return {
             partyMemberCategory: {
                title: '党员类型',
                data: []
            },
            partyMemberAge:{
                title: '党员年龄',
                data: [],
                areaNameS :[],
            },
            partyMemberEducation:{
                title: '学历结构',
                data: [],
                areaNameS :[],
            },
            partyMemberList:[],
            dialogVisible:false,
            pageSize:16,
            id:"",
            partyMemberInfo:{},
            total:0,
        };
    },
    components:{
        partyType,
        partyAge,
        educationalStructure,
        partyMember
    },
    mounted() {
        
    },
    created(){
        if(this.$store.state.menu.id.indexOf("_")!==-1){
            this.id = this.$store.state.menu.id.substr(this.$store.state.menu.id.indexOf("_")+1);
            this.getPartyMemberBigData();
            this.getPartyMemberList(1);

        }
    },
    methods: {
        handleClose(done) {
            done();
        },
        currentChange(num){
            this.getPartyMemberList(num);
        },
        async getPartyMemberBigData(){
             try{
                const {data} = await getPartyMemberBigData(this.id);
                //党员类型数据
                let partyMemberCategory = [];
                let colorArr = ["#16f5e3","#ffcc00","#6eff68","#ff6f6f","#bc74ff"]
                data.partyMemberCategory.forEach((item,index)=>{
                    let json = {}
                    if(index<=4){
                        json = {
                            value: item.num,
                            name: item.label,
                            itemStyle: {
                                color: colorArr[index]
                            }
                        }
                    }else{
                        json = {
                            value: item.num,
                            name: item.label,
                            itemStyle: {
                                color: "#999"
                            }
                        }
                    }
                    partyMemberCategory.push(json);
                })
                this.partyMemberCategory.data = partyMemberCategory;
                //党员年龄
                this.partyMemberAge = {
                    title:"党员年龄",
                    data:[],
                    areaNameS:[]
                }
                data.partyMemberAge.forEach((item,index)=>{
                    this.partyMemberAge.data.push(item.count);
                    this.partyMemberAge.areaNameS.push(item.label);
                })
                //党员学历
                 this.partyMemberEducation = {
                    title:"学历结构",
                    data:[],
                    areaNameS:[]
                }
                data.partyMemberEducation.forEach((item,index)=>{
                    this.partyMemberEducation.data.push(item.num);
                    this.partyMemberEducation.areaNameS.push(item.label);
                })

            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        },
        async getPartyMemberList(num){
            try{
                let param = {
                    id:this.id,
                    page_size:this.pageSize,
                    page:num
                }
                const {data, count} = await getPartyMemberList(param);
                this.partyMemberList = data;
                this.total = count;
                console.log(data)
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        },
        async getDetail(id){
            try{
                 const {data} = await getPartyMemberInfo(id);
                 this.partyMemberInfo = data;
                 this.dialogVisible = true;
            }catch(err){
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        }

         
    },
    watch: {
    '$store.state.menu': {
      deep: true, //深度监听
      handler(newValue, oldValue) {
        this.id = newValue.id
         if(this.id.indexOf("_")!==-1){
          this.id = this.id.substr(this.id.indexOf("_")+1);
         }
        if(newValue.name == "dygl"){
           this.getPartyMemberBigData();
           this.getPartyMemberList(1);
        }
        
      },
    },
  },
};
</script>

<style scoped>
    .dyglEcharts{
        height:236px;
        margin-top:50px;
        overflow: hidden;
        margin-bottom:26px;
        display: flex;
        justify-content: space-between;
    }
    .el-col-8{
        height:100%;
         background: url("@/assets/images/eachartBg.png") no-repeat center center;
        background-size: 100% 100%;
        position: relative;
        width: 31%;
    }
    .el-col-8 h2{
        position: absolute;
        top:-6px;
        left:5px;
        font-size:20px;
        color:#92d5ff;
        font-weight:normal;
    }
    .personList{
        display: flex;
        padding:0 10px;
        flex-wrap: wrap;
        width:100%;
    }
    .personList li{
        width:11.5%;
        background: url("@/assets/images/personBg.png") no-repeat center center;
        background-size: 100% 100%;
        margin:0 0.5% 25px;
    }
    .personList li a{
        display: block;
        font-size: 18px;
        color:#92d5ff;
        display: flex;
        flex-direction: column;
        width:100%;
        align-items: center;
        padding:20px;
    }
    .personList li a img{
        width:107px;
        margin-bottom:18px;
    }
    .personList li a span{
        display: block;
        width:69px;
        height:24px;
        line-height: 24px;
        text-align: center;
        font-size: 14px;
        color:#fefefe;
        border-radius: 24px;
        background-image: linear-gradient( to right, rgba(81,29,175,0.5), rgba(35,215,254,0.5));
        margin-top:19px;
    }
    
</style>