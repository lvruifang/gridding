<template>
    <div class="rightContent">
         <div class="dyglEcharts">
              <div class="col">
                <p class="title">会议数据统计</p>
                <div class="item">
                    <img src="@/assets/images/meetingIcon.png" alt="">
                    <span>会议总数</span>
                    <span class="num">100</span>
                </div>
              </div> 
              <div class="col">
                <h2>会议发布</h2>
                <conference-distribution :data="data"></conference-distribution>
              </div>
            </div>
        
        <el-table
        :data="tableData"
        @row-click="rowClick"
        style="width: 100%"
        
       >
        <el-table-column
        type="index"
        width="120"
        align="center"
        label="序号"
       >
        </el-table-column>
        <el-table-column
        prop="name"
        align="center"
        label="会议名称"
       >
        </el-table-column>
        <el-table-column
        prop="time"
        align="center"
        label="会议时间"
        >
        </el-table-column>
        <el-table-column
        prop="type"
        align="center"
        label="会议类型">
        </el-table-column>
        <el-table-column
        prop="personType"
        align="center"
        label="参会人员">
        </el-table-column>
        <el-table-column  align="center">
        <template >
            <a href="javascript:;">详细 ></a>
        </template>
        </el-table-column>
    </el-table>
     <el-dialog
            :visible.sync="dialogVisible"
            width="80%"
            :before-close="handleClose">
            <meeting-name></meeting-name>
    </el-dialog>
    </div>
</template>

<script>
import meetingName from "@/components/partyBuilding/popup/meetingName";
import conferenceDistribution from "@/components/partyBuilding/echartsComponent/conferenceDistribution";
export default {
  name: "meetingsManagement",

  data() {
    return {
      data: {
        title:"会议发布",
        data:[
          { 
            value: 35,
            name: "民主评议会", 
            itemStyle: {
             color: '#e7b41d'
            } 
          },
          { 
            value: 40, 
            name: "组织生活会" ,
            itemStyle: {
             color: '#ff1c4c'
            } 
          },
          { 
            value: 25, 
            name: "全体党员" ,
            itemStyle: {
             color: '#0ce6ff'
            } 
          },
      ]},
      tableData: [
        {
          time: "2016-05-02",
          name: "会议时间达营子村民主评议会",
          type: "党员活动室",
          personType: "全体党员"
        },
        {
          time: "2016-05-02",
          name: "会议时间达营子村民主评议会",
          type: "党员活动室",
          personType: "全体党员"
        },
        {
          time: "2016-05-02",
          name: "会议时间达营子村民主评议会",
          type: "党员活动室",
          personType: "全体党员"
        },
        {
          time: "2016-05-02",
          name: "会议时间达营子村民主评议会",
          type: "党员活动室",
          personType: "全体党员"
        },
        {
          time: "2016-05-02",
          name: "会议时间达营子村民主评议会",
          type: "党员活动室",
          personType: "全体党员"
        },
        {
          time: "2016-05-02",
          name: "会议时间达营子村民主评议会",
          type: "党员活动室",
          personType: "全体党员"
        },

      ],
      dialogVisible: false
    };
  },
  components: {
    meetingName,
    conferenceDistribution
  },
  mounted() {},

  methods: {

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    rowClick() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    }
  }
};
</script>

<style scope="scope">
    .dyglEcharts{
        height:153px;
        margin-top:90px;
        overflow: hidden;
        margin-bottom:26px;
        display: flex;
        justify-content: space-between;
    }
    .dyglEcharts .col{
        height:100%;
    }
    .dyglEcharts .col:first-child{
       background: url("@/assets/images/eachartBg.png") no-repeat center center;
        background-size: 100% 100%;
        position: relative;
        font-size: 26px;
        color:#d4eaf6;
        display: flex;
        align-items: center;
        width:32%;
    }
    .dyglEcharts .col:last-child{
      width:64%;
      background: url("@/assets/images/hyglBg.png") no-repeat center center;
      background-size: 100% 100%;
      position: relative;

    }
     .dyglEcharts .col:last-child h2{
         position: absolute;
        top:-6px;
        left:5px;
        font-size:20px;
        color:#92d5ff;
     }
    .dyglEcharts .col:first-child .title{
      position: absolute;
      left:5px;
      top:-6px;
      font-size: 20px;
      color:#92d5ff;
    }
    .dyglEcharts .col:first-child .item{
      display: flex;
      align-items: center;
    }
    .dyglEcharts .col:first-child .num{
      color:#e73851;
      font-size:40px;
      margin-left:33px;
    }
    .dyglEcharts .col:first-child img{
      width:95px;
      margin-right:46px;
      margin-left:40px;
    }
    
    
</style>