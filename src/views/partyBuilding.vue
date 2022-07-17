<template>
    <div>
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
import { getMenuInfo} from "@/api/party";
export default {
    name: 'App',
    data() {
        return {
            treeDataObj: {
                title:"智慧党建",
                data:[
                    {
                        label: '组织架构',
                        id:"level01",
                        children: []
                    },
                    {
                        label: '党组织管理',
                        children:[],
                        id:"level02"
                    },
                    {
                        label: '两委干部管理',
                        children: [],
                        id:"level03"
                    },
                    {
                        label: '党员管理',
                        children: [],
                        id:"level04"
                    },
                    {
                        label: '会议管理',
                        children: [],
                        id:"level05"
                    },
                ],
                expandedKeys:['level01'],
                nodeKey:"11_1"
            },

        };
    },
    
    components:{
        treeMenu,
        siteHeader,
    },
    mounted() {
        
    },
    created() {
        this.getMenuInfo(); //获取左侧菜单数据
        
    },
    methods: {
        ...mapMutations(["changeMenu"]),
        async getMenuInfo() {
            try {
                const { data } = await getMenuInfo();
                data.forEach((item,index)=>{
                    item.forEach((item1,index1)=>{
                        if(item1.name == "zzjg"){
                            this.treeDataObj.data[0].children =item;
                            return
                        }else if (item1.name == "dzzgl"){
                            this.treeDataObj.data[1].children =item;
                            return
                        }else if(item1.name == "lwgbgl"){
                            this.treeDataObj.data[2].children =item;
                            return
                        }else if(item1.name == "dygl"){
                            this.treeDataObj.data[3].children =item;
                            return
                        }else if(item1.name == "hygl"){
                        this.treeDataObj.data[4].children =item;
                            return
                        }
                    })
                })
                this.treeDataObj.data[0].children[0].id= 1+ this.treeDataObj.data[0].children[0].id;
                this.changeMenu(this.treeDataObj.data[0].children[0]); 
                this.$router.push({name:"zzjg"})
            } catch (err) {
                this.$message({
                message: err,
                offset: 400,
                type: "success"
                });
            }
        },
       
    },
    
    beforeCreate: function() {
        document.getElementsByTagName("body")[0].className="partyBuildingBg";
    },
    beforeDestroy: function() {
     document.body.removeAttribute("class","partyBuildingBg");
    }
};
</script>

<style scoped>
   
</style>
