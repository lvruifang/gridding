<template>
<div>
    <div class="treeBox">
        <div class="title">
            <img src="@/assets/images/iconDj.png" alt="">
            <span>{{treeDataObj.title}}</span>
        </div>
        <el-tree
        :data="treeDataObj.data"
        :props="defaultProps"
        ref="tree"
        accordion
        node-key="id"
        @node-click="handleNodeClick"
        :default-expanded-keys="treeDataObj.expandedKeys"
        :current-node-key="treeDataObj.nodeKey"
        
        >
        </el-tree>
    </div>
    
</div>
    
</template>
<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        props:['treeDataObj'],
        name:'treeMenu',
        data () {
            return {
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        created(){
           
           
        },
        methods: {
            ...mapMutations({
                changeState:'changeMenu'
            }),
           handleNodeClick(data,node,obj){
                data.id = data.id.toString();
            if (data.id.indexOf("1_") !== -1){
                this.changeState(data)
            }
            if(data.name && data.id.indexOf("1_") !== -1){
                this.$router.push({name:data.name})
            }
            
           }
        },
    }
</script>
<style scoped>
   .title{
       font-size: 34px;
        color:#92d5ff;
        width:100%;
        line-height: 94px;
        height:94px;
        display: flex;
        justify-content: center;
        align-items: center;
        border:solid 1px #3f5162;
        border-bottom-width:0px;

   }
   .title img{
       width:42px;
       height:42px;
       margin-right:10px;
   }
   
</style>