<template>
    <div class="rightContent">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/sheng.png" alt="">
                        <span>跨省流动人数</span>
                        <span class="num">5000</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                    <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨市流动人数</span>
                        <span class="num" style="color:#ffc70c;">3000</span>
                    </div>
                </div>
            </el-col>
             <el-col :span="8">
                <div class="list">
                     <p class="title">流动人员数据统计</p>
                    <div class="des">
                        <img src="@/assets/images/shi.png" alt="">
                        <span>跨县流动人数</span>
                        <span class="num" style="color:#92d5ff;">2000</span>
                    </div>
                </div>
            </el-col>
        </el-row>

         <el-table
        :cell-style="cellStyle"
        :data="tableData"
        @row-click="rowClick"
        style="width: 100%"
        
        
       >
        <el-table-column
        type="index"
        width="80"
        align="center"
        label="序号"
        cell-class-name="indexColor"
       >
        </el-table-column>
        <el-table-column
        prop="name"
        align="center"
        label="姓名"
       
       >
        </el-table-column>
        <el-table-column
        prop="sex"
        align="center"
        label="性别"
        >
        </el-table-column>
        <el-table-column
        prop="ID"
        align="center"
        min-width=188,
        label="身份证号">
        </el-table-column>
        <el-table-column
        prop="time"
        align="center"
        min-width=106,
        label="时间（来怀）">
        </el-table-column>
        <el-table-column
        prop="visitingPlace"
        align="center"
        label="来访地">
        </el-table-column>
        <el-table-column
        prop="placeOfVisit"
        align="center"
        label="到访地">
        </el-table-column>
        <el-table-column
        prop="subjectMatter"
        align="center"
        label="事由">
        </el-table-column>
        <el-table-column
        prop="phone"
        align="center"
        min-width=115,
        label="电话">
        </el-table-column>
        <el-table-column
        prop="nuclein"
        align="center"
        label="核算">
        </el-table-column>
        <el-table-column  min-width=114, align="center">
        <template >
            <a href="javascript:;">分析研判 ></a>
        </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name: 'floatingPersonnel',

    data() {
        return {
             tableData: [
                {
                    name:"张一山",
                    sex:"男",
                    ID:"130730198701253441",
                    time: "2016-05-02",
                    visitingPlace:"河北 邯郸",
                    placeOfVisit:"河北 怀来",
                    subjectMatter:"探亲",
                    phone:"18810068960",
                    nuclein:"阴性",
                },
                 {
                    name:"张一山",
                    sex:"男",
                    ID:"130730198701253441",
                    time: "2016-05-02",
                    visitingPlace:"河北 邯郸",
                    placeOfVisit:"河北 怀来",
                    subjectMatter:"探亲",
                    phone:"18810068960",
                    nuclein:"阴性",
                },
                 {
                    name:"张一山",
                    sex:"男",
                    ID:"130730198701253441",
                    time: "2016-05-02",
                    visitingPlace:"河北 邯郸",
                    placeOfVisit:"河北 怀来",
                    subjectMatter:"探亲",
                    phone:"18810068960",
                    nuclein:"阴性",
                },
                 {
                    name:"张一山",
                    sex:"男",
                    ID:"130730198701253441",
                    time: "2016-05-02",
                    visitingPlace:"河北 邯郸",
                    placeOfVisit:"河北 怀来",
                    subjectMatter:"探亲",
                    phone:"18810068960",
                    nuclein:"阴性",
                },
                 {
                    name:"张一山",
                    sex:"男",
                    ID:"130730198701253441",
                    time: "2016-05-02",
                    visitingPlace:"河北 邯郸",
                    placeOfVisit:"河北 怀来",
                    subjectMatter:"探亲",
                    phone:"18810068960",
                    nuclein:"阴性",
                },
            ],
        };
    },

    mounted() {
        
    },

    methods: {
         rowClick(){
            this.$router.push({name:"ldryxq"}) 
        },
         cellStyle ({row, column, rowIndex, columnIndex}) {
            if (columnIndex == 0){
                return {'color':'#5abbff'}
            }
        }
    },
};
</script>

<style slot-scope="scope">
    .list{
        width:100%;
        height:150px;
        background: url("@/assets/images/ldryBg.png") no-repeat center center;
        background-size:100% 100%;
        margin-top:90px;
        position: relative;
         color:#d4eaf6;
    }
    .title{
        font-size:20px;
        color:#92d5ff;
        position: relative;
        top:-11px;
        left:2px;
    }
    .des{
        display: flex;
        align-items: center;
        font-size: 26px;
        color:#d4eaf6;

    }
    .des img{
        width:94px;
        margin-right:27px;
    }
    .des .num{
        font-size: 40px;
        color:#e73851;
        margin-left: 24px;
    }
</style>