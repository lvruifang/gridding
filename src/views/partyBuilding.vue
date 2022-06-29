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
                title:"智慧党建",
                data:[
                    {
                        label: '组织架构',
                        id:3,
                        children: [
                            {
                                label: '党建办',
                                name:"zzjg",
                                id:5,
                                
                            },
                            {
                                label: '党政办',
                                 name:"zzjg",
                                
                            },
                            {
                                label: '自然资源和规划所',
                                name:"zzjg",
                            },
                            {
                                label: '应急管理办公室',
                                name:"zzjg",
                            },
                            {
                                label: '综合行政执法队',
                                name:"zzjg",
                            },
                            {
                                label: '行政综合审批服务中心',
                                name:"zzjg",
                            },
                            {
                                label: '退役军人服务站',
                                name:"zzjg",
                            }
                        ]
                    },
                    {
                        
                        label: '党组织管理',
                        children: [
                            {
                                label: '街村',
                              
                                children: [
                                    {
                                        
                                        label: '达字营村',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '大南新堡村',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '官庄村村',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '西榆林村',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '东花园村',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '西花园村',
                                        name:"dzzgl",
                                    }
                                ]
                            },
                            {
                                label: '社区',
                                children: [
                                    {
                                        label: '社区一',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '社区一',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '社区一',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '社区一',
                                        name:"dzzgl",
                                    }
                                ]
                            },
                            {
                                label: '商业街',
                                children: [
                                    {
                                        label: '商业街一',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '商业街二',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '商业街三',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '商业街四',
                                        name:"dzzgl",
                                    }
                                ]
                            },
                            {
                                label: '企业',
                                children: [
                                    {
                                        label: '企业一',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '企业二',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '企业三',
                                        name:"dzzgl",
                                    },
                                    {
                                        label: '企业四',
                                        name:"dzzgl",
                                    }
                                ]
                            },

                        ]
                    },
                    {
                        label: '两委干部管理',
                        children: [
                            {
                                label: '达字营村',
                                name:"lwgbgl",
                            },
                            {
                                label: '大南新堡村',
                                 name:"lwgbgl",
                            },
                            {
                                label: '官庄村村',
                                 name:"lwgbgl",
                            },
                            {
                                label: '西榆林村',
                                name:"lwgbgl",
                            },
                            {
                                label: '东花园村',
                                 name:"lwgbgl",
                            },
                            {
                                label: '西花园村',
                                 name:"lwgbgl",
                            }
                        ]
                    },
                    {
                        label: '党员管理',
                        children: [
                            {
                                label: '街村',
                                children: [
                                    {
                                        label: '达字营村',
                                        name:"dygl",
                                    },
                                    {
                                        label: '大南新堡村',
                                         name:"dygl",
                                    },
                                    {
                                        label: '官庄村村',
                                         name:"dygl",
                                    },
                                    {
                                        label: '西榆林村',
                                         name:"dygl",
                                    },
                                    {
                                        label: '东花园村',
                                         name:"dygl",
                                    },
                                    {
                                        label: '西花园村',
                                         name:"dygl",
                                    }
                                ]
                            },
                            {
                                label: '社区',
                                children: [
                                    {
                                        label: '社区一',
                                         name:"dygl",
                                    },
                                    {
                                        label: '社区一',
                                         name:"dygl",
                                    },
                                    {
                                        label: '社区一',
                                         name:"dygl",
                                    },
                                    {
                                        label: '社区一',
                                         name:"dygl",
                                    }
                                ]
                            },
                            {
                                label: '商业街',
                                children: [
                                    {
                                        label: '商业街一',
                                         name:"dygl",
                                    },
                                    {
                                        label: '商业街二',
                                         name:"dygl",
                                    },
                                    {
                                        label: '商业街三',
                                         name:"dygl",
                                    },
                                    {
                                        label: '商业街四',
                                         name:"dygl",
                                    }
                                ]
                            },
                            {
                                label: '企业',
                                children: [
                                    {
                                        label: '企业一',
                                         name:"dygl",
                                    },
                                    {
                                        label: '企业二',
                                         name:"dygl",
                                    },
                                    {
                                        label: '企业三',
                                         name:"dygl",
                                    },
                                    {
                                        label: '企业四',
                                         name:"dygl",
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        label: '会议管理',
                        children: [
                            {
                                label: '街村',
                                children: [
                                    {
                                        label: '达字营村',
                                         name:"hygl",
                                    },
                                    {
                                        label: '大南新堡村',
                                        name:"hygl",
                                    },
                                    {
                                        label: '官庄村村',
                                        name:"hygl",
                                    },
                                    {
                                        label: '西榆林村',
                                        name:"hygl",
                                    },
                                    {
                                        label: '东花园村',
                                        name:"hygl",
                                    },
                                    {
                                        label: '西花园村',
                                        name:"hygl",
                                    }
                                ]
                            },
                            {
                                label: '社区',
                                children: [
                                    {
                                        label: '社区一',
                                        name:"hygl",
                                    },
                                    {
                                        label: '社区一',
                                        name:"hygl",
                                    },
                                    {
                                        label: '社区一',
                                        name:"hygl",
                                    },
                                    {
                                        label: '社区一',
                                        name:"hygl",
                                    }
                                ]
                            },
                            {
                                label: '商业街',
                                children: [
                                    {
                                        label: '商业街一',
                                        name:"hygl",
                                    },
                                    {
                                        label: '商业街二',
                                        name:"hygl",
                                    },
                                    {
                                        label: '商业街三',
                                        name:"hygl",
                                    },
                                    {
                                        label: '商业街四',
                                        name:"hygl",
                                    }
                                ]
                            },
                            {
                                label: '企业',
                                children: [
                                    {
                                        label: '企业一',
                                        name:"hygl",
                                    },
                                    {
                                        label: '企业二',
                                        name:"hygl",
                                    },
                                    {
                                        label: '企业三',
                                        name:"hygl",
                                    },
                                    {
                                        label: '企业四',
                                        name:"hygl",
                                    }
                                ]
                            },
                        ],
                    }
                ],
            },

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
        document.getElementsByTagName("body")[0].className="partyBuildingBg";
     
        
    },
    beforeDestroy: function() {
     document.body.removeAttribute("class","partyBuildingBg");
    }
};
</script>

<style scoped>
   
</style>
