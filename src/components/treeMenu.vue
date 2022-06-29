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

        accordion
        node-key="id"
        @node-click="handleNodeClick"
        :default-expanded-keys="[3]"
        :current-node-key="5"
        >
        </el-tree>
    </div>
    
</div>
    
</template>
<script>
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
        methods: {
           handleNodeClick(data,node,obj){
               if(data.name){
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