<template>
    <div class="epidemicPrevention">
        <site-header></site-header>
        <div class="content">
            <tree-menu :treeDataObj='treeDataObj' class="treeMenu"></tree-menu>
           <router-view></router-view>
        </div>
    </div>
</template> 
<script>
import siteHeader from '@/components/siteHeader'
import treeMenu from '@/components/treeMenu' 
import { mapState, mapMutations } from "vuex";
import { getMenuInfo} from "@/api/antiepidemic";
export default {
    name: 'epidemicPrevention',
    data() {
        return {
            treeDataObj: {
                title:"智慧防疫",
                data:[],
                expandedKeys:[], //树形结构默认展开的key
                nodeKey:"11_1"  //树形结构默认选中的key
            },

        };
    },
    created(){
        this.getMenuInfo(); //获取左侧菜单数据
    },
    components:{
        treeMenu,
        siteHeader,
    },
    mounted() {
        
    },
    methods: {
         ...mapMutations(["changeMenu"]),
          async getMenuInfo() {
            try {
                const { data } = await getMenuInfo();
                this.treeDataObj.data = data;
                this.treeDataObj.data[0].id= 1+ this.treeDataObj.data[0].id;
                this.changeMenu(this.treeDataObj.data[0]); 
                this.$router.push({name:"ldry"})
            } catch (err) {
                this.$message({
                message: err,
                offset: 400,
                type: "error"
                });
            }
        },
    },
    watch:{
      
    },
};
</script>

<style scoped>
   
</style>
