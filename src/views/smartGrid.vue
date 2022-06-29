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
export default {
    name: 'App',
    data() {
        return {
            treeDataObj: {
                title:"智慧网格",
                data:[
                    {
                        label: '街村',
                        id:1,
                         children: [
                            {
                                label: '达字营村',
                                id:2,
                                children: [
                                    {
                                        label: '王东喜网格',
                                        id:3,
                                        children:[
                                             {
                                                 
                                                label:"阜新网格",
                                            },
                                            {
                                                id:5,
                                                label:"阜新网格",

                                            },
                                             {
                                                 id:4,
                                                label:"阜新网格",

                                            },
                                            {
                                                 
                                                label:"阜新网格",

                                            },
                                        ]
                                    },
                                    {
                                        label: '茂文绣网格',
                                        children:[
                                            {
                                                label:"阜新网格",

                                            },
                                             {
                                                label:"阜新网格",

                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                label: '大南新堡村',
                                children:[
                                            {
                                                label:"网格一",

                                            },
                                             {
                                                label:"网格二",

                                            }
                                        ]
                               
                            },
                            {
                                label: '官庄村村',
                                children:[
                                            {
                                                label:"阜新网格",

                                            },
                                             {
                                                label:"阜新网格",

                                            }
                                        ]
                              
                            },
                        ]
                    },
                    {
                        label: '社区',
                        children:[
                            {
                                label:"社区一",
                            }
                        ]
                        
                    },
                    {
                        label: '商业街',
                       
                    },
                    {
                        label: '企业',
                       
                    },
                    {
                        label: '其他',
                        
                    }
                ],
            }
        };
    },
   
    components:{
        treeMenu,
        siteHeader,
    },
    mounted() {
        
    },
    methods: {
        
    },
    watch:{
      
    },
    beforeCreate: function() {
        document.getElementsByTagName("body")[0].className="smartGrid";
    },
    beforeDestroy: function() {
     document.body.removeAttribute("class","smartGrid");
    }
};
</script>

<style scoped>

</style>
