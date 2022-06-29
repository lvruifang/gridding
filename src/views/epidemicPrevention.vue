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
export default {
    name: 'epidemicPrevention',
    data() {
        return {
            treeDataObj: {
                title:"智慧防疫",
                data:[
                    {
                        label: '流动人员',
                        children:[
                             {
                                label: '达字营村',
                                name:"ldry"
                            },
                            {
                                label: '大南新堡村',
                                name:"ldry"
                            },
                            {
                                label: '官庄村村',
                                name:"ldry"
                            },
                            {
                                label: '西榆林村',
                                name:"ldry"
                            },
                            {
                                label: '东花园村',
                                name:"ldry"
                            },
                            {
                                label: '西花园村',
                                name:"ldry"
                            }
                        ]
                    },
                    // {
                        
                    //     label: '党组织管理',
                    //     children: [
                    //         {
                    //             label: '街村',
                              
                    //             children: [
                    //                 {
                                        
                    //                     label: '达字营村',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '大南新堡村',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '官庄村村',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '西榆林村',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '东花园村',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '西花园村',
                    //                     name:"dzzgl",
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             label: '社区',
                    //             children: [
                    //                 {
                    //                     label: '社区一',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '社区一',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '社区一',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '社区一',
                    //                     name:"dzzgl",
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             label: '商业街',
                    //             children: [
                    //                 {
                    //                     label: '商业街一',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '商业街二',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '商业街三',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '商业街四',
                    //                     name:"dzzgl",
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             label: '企业',
                    //             children: [
                    //                 {
                    //                     label: '企业一',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '企业二',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '企业三',
                    //                     name:"dzzgl",
                    //                 },
                    //                 {
                    //                     label: '企业四',
                    //                     name:"dzzgl",
                    //                 }
                    //             ]
                    //         },

                    //     ]
                    // },
                    {
                        label: '重点防疫点',
                         children:[
                             {
                                label: '达字营村',
                                name:"zdfyd"
                            },
                            {
                                label: '大南新堡村',
                                name:"zdfyd"
                            },
                            {
                                label: '官庄村村',
                                name:"zdfyd"
                            },
                            {
                                label: '西榆林村',
                                name:"zdfyd"
                            },

                        ]
                    },
                    {
                        label: '哨点',
                        children:[
                             {
                                label: '达字营村',
                                name:"sd"
                            },
                            {
                                label: '大南新堡村',
                                name:"sd"
                            },
                            {
                                label: '官庄村村',
                                name:"sd"
                            },
                            {
                                label: '西榆林村',
                                name:"sd"
                            },
                            {
                                label: '东花园村',
                                name:"sd"
                            },
                            {
                                label: '西花园村',
                                name:"sd"
                            }
                        ]
                    },
                    {
                        label: '三道防线',
                        children:[
                             {
                                label: '高速',
                                id:3,
                                name:"sdfx"
                            },
                        ]
                    },
                    {
                        label: '流掉队伍',
                        id:5,
                        children:[
                             {
                                label: '达字营村',
                                id:3,
                                name:"lddw"
                            },
                            {
                                label: '大南新堡村',
                                name:"lddw"
                            },
                            {
                                label: '官庄村村',
                                name:"lddw"
                            },
                            {
                                label: '西榆林村',
                                name:"lddw"
                            },
                            {
                                label: '东花园村',
                                name:"lddw"
                            },
                            {
                                label: '西花园村',
                                name:"lddw"
                            }
                        ]
                    },
                     {
                        label: '核酸采集点',
                        name:"hscjd"
                    },
                     {
                        label: '疫苗信息',
                        children:[
                             {
                                label: '达字营村',
                                id:3,
                                name:"ymxx"
                            },
                            {
                                label: '大南新堡村',
                                name:"ymxx"
                            },
                            {
                                label: '官庄村村',
                                name:"ymxx"
                            },
                            {
                                label: '西榆林村',
                                name:"ymxx"
                            },
                            {
                                label: '东花园村',
                                name:"ymxx"
                            },
                            {
                                label: '西花园村',
                                name:"ymxx"
                            }
                        ]
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
};
</script>

<style scoped>
   
</style>
