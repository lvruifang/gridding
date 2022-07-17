<template>
  <div class="rightContent">
    <div class="dyglEcharts">
      <div class="col">
        <p class="title">会议总数</p>
        <div class="item">
          <img
            src="@/assets/images/meetingIcon.png"
            alt=""
          >
            <span>会议总数</span>
            <span class="num">{{total}}</span>
        </div>
      </div>
      <div class="col">
        <h2>会议发布</h2>
        <conference-distribution :data="meetingsBigData"></conference-distribution>
      </div>
    </div>

    <el-table
      :data="tableData"
    
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
        label="会议类型"
      >
      </el-table-column>
      <el-table-column
        prop="participants"
        align="center"
        label="参会人员"
      >
      </el-table-column>
      <el-table-column align="center">
        <template slot-scope="scope">
        <a @click="rowClick(scope.row)" href="javascript:;" type="text" >详细</a>
      </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination
        background
        v-if = "total >6"
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
      width="80%"
      :before-close="handleClose"
    >
      <meeting-name
        :data=meetingDetail
        eetingDetail
      ></meeting-name>
    </el-dialog>
  </div>
</template>

<script>
import meetingName from "@/components/partyBuilding/popup/meetingName";
import conferenceDistribution from "@/components/partyBuilding/echartsComponent/conferenceDistribution";
import { getMeetingsList, getMeetingsInfo,getMeetingsBigData } from "@/api/party";
import { mapState } from "vuex";
export default {
  name: "meetingsManagement",

  data() {
    return {
      meetingsBigData: {
        title: "会议发布",
        data: []
      },

      id: "",
      total:0,
      pageSize:6,
      meetingDetail: {},
      tableData: [],
      dialogVisible: false
    };
  },
  components: {
    meetingName,
    conferenceDistribution
  },
  created() {
    if (this.$store.state.menu.id.indexOf("_") !== -1) {
      this.id = this.$store.state.menu.id.substr(
        this.$store.state.menu.id.indexOf("_") + 1
      );
      this.getMeetingsList(1);
      this.getMeetingsBigData();
    }
  },
  mounted() {},

  methods: {
    currentChange(num){
      this.getMeetingsList(num)
    },
    async getMeetingsBigData() {
      try {
        const { data} = await getMeetingsBigData(this.id);
        let colors = ["#e7b41d","#ff1c4c","#0ce6ff"]
        let meetingsBigData = [];
        data.meetingsType.forEach((item,index)=>{
          let json = {
            value: item.num,
            name: item.label,
            itemStyle: {
              color: colors[index]
            }
          }
          meetingsBigData.push(json);
        })
        this.meetingsBigData.data = meetingsBigData;
        console.log(this.meetingsBigData)
      } catch (err) {
        this.$message({
          message: err,
          offset: 400,
          type: "error"
        });
      }
    },
    async getMeetingsList(num) {
      try {
        let param = {
          id: this.id,
          page_size: this.pageSize,
          page: num
        };
        const { data,count} = await getMeetingsList(param);
        this.tableData = data;
        this.total = count;
      } catch (err) {
        this.$message({
          message: err,
          offset: 400,
          type: "error"
        });
      }
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    async rowClick(row) {
      try {
        const { data } = await getMeetingsInfo(row.id);
        this.meetingDetail = data;
      } catch (err) {
        this.$message({
          message: err,
          offset: 400,
          type: "error"
        });
      }
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    }
  },
  watch: {
    "$store.state.menu": {
      deep: true, //深度监听
      handler(newValue, oldValue) {
        this.id = newValue.id;
        if (this.id.indexOf("_") !== -1) {
          this.id = this.id.substr(this.id.indexOf("_") + 1);
        }
        if (newValue.name == "hygl") {
          this.getMeetingsList();
          this.getMeetingsBigData();
        }
      }
    }
  }
};
</script>

<style scoped>
.pagination{
  margin-top:20px;
}
.dyglEcharts {
  height: 153px;
  margin-top: 90px;
  overflow: hidden;
  margin-bottom: 26px;
  display: flex;
  justify-content: space-between;
}
.dyglEcharts .col {
  height: 100%;
}
.dyglEcharts .col:first-child {
  background: url("@/assets/images/eachartBg.png") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  font-size: 26px;
  color: #d4eaf6;
  display: flex;
  align-items: center;
  width: 32%;
}
.dyglEcharts .col:last-child {
  width: 64%;
  background: url("@/assets/images/hyglBg.png") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.dyglEcharts .col:last-child h2 {
  position: absolute;
  top: -6px;
  left: 5px;
  font-size: 20px;
  color: #92d5ff;
}
.dyglEcharts .col:first-child .title {
  position: absolute;
  left: 5px;
  top: -6px;
  font-size: 20px;
  color: #92d5ff;
}
.dyglEcharts .col:first-child .item {
  display: flex;
  align-items: center;
}
.dyglEcharts .col:first-child .num {
  color: #e73851;
  font-size: 40px;
  margin-left: 33px;
}
.dyglEcharts .col:first-child img {
  width: 95px;
  margin-right: 46px;
  margin-left: 40px;
}
</style>