<template>
    <div>
        <site-header></site-header>
        <div class="content">
            <tree-menu
                v-if="treeDataObj.data.length"
                :treeDataObj='treeDataObj'
                class="treeMenu"
            >
            </tree-menu>
                <router-view></router-view>
        </div>
    </div>
</template> 
  
<script>
import { gridList, oneLevelGridInfo } from "@/api/smartGrid";
import siteHeader from "@/components/siteHeader";
import treeMenu from "@/components/treeMenu";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      treeDataObj: {
        title: "智慧网格",
        data: [],
        expandedKeys:[1,'1_1','2_3'],
        nodeKey:"3_4"
      },
      formData: {}
    };
  },

  components: {
    treeMenu,
    siteHeader
  },
  created() {
    //获取树形结构所有数据
    this.getGridList();
    //获取默认选择的数据
    this.getOneLevelGridInfo();
  },
  mounted() {},
  methods: {
    ...mapMutations(["changeMenu"]),
    async getGridList() {
      try {
        const { data } = await gridList();
        this.treeDataObj = {
          title: "智慧网格",
          data: data, //树型结构数据
          expandedKeys:[1,'1_1','2_3'], //树形结构默认展开的key
          nodeKey:"3_4"  //树形结构默认选中的key
        };
     
      } catch (err) {
        this.$message({
          message: err,
          offset: 400,
          type: "success"
        });
      }
    },
     async getOneLevelGridInfo() {
      try {
        const { data } = await oneLevelGridInfo('1_1');  //获取树型结构默认选中的数据
        this.changeMenu(data);  //将树形结构默认选中的数据赋值给menu
      } catch (err) {
        this.$message({
          message: err,
          offset: 400,
          type: "success"
        });
      }
    },
  },
  watch: {},
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className = "smartGrid";
  },
  beforeDestroy: function() {
    document.body.removeAttribute("class", "smartGrid");
  }
};
</script>

<style scoped>
</style>
