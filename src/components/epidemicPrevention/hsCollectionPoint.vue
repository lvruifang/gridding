<template>
    <div class="rightContent">
       <el-row  class="top">
           <p class="title">核算采集点数据统计</p>
            <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/hsjc.png" alt="">
                    <span>核酸采集点总数</span>
                    <span class="num">50</span>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/yy.png" alt="">
                    <span>公立医院</span>
                    <span class="num" style="color:#ffc70c;">26</span>
                </div>
            </el-col>
             <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/sq.png" alt="">
                    <span>社区采集点</span>
                    <span class="num" style="color:#92d5ff;">80</span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="list">
                    <img src="@/assets/images/yljg.png" alt="">
                    <span>医疗机构</span>
                    <span class="num" style="color:#92d5ff;">20</span>
                </div>
            </el-col>
        </el-row>
        <ul class="cjdWrap">
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
            <li>
                <img src="@/assets/images/cjdImg.jpg" alt="">
                <p class="t">第一人民医院</p>
                <p>地址：花园东镇汉威国际广场3区5号楼3层电话：400-120-123456</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'hsCollectionPoint',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .top{
        width:100%;
        height:148px;
        background:url("@/assets/images/hscjdBg.png") no-repeat ;
        background-size:100% 100%;
        margin-top:90px;
        padding-right:100px;
        position: relative;
       
    }
    .title{
        position: absolute;
        left:5px;
        top:-11px;
        font-size: 20px;
        color:#92d5ff;
    }
    .list{
        width:100%;
        height:100%;
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 22px;
        color:#d4eaf6;

    }
    .list img{
        width:82px;
    }
    .list .num{
        font-size:40px;
        color:#e73851;
        margin-left:15px;
    }
    .el-col-6{
        height:100%;
    }
    .cjdWrap{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top:30px;
    }
    li{
        width:24%;
        background:url("@/assets/images/hscjdItemBg.png") no-repeat;
        background-size:100% 100%;
        font-size: 16px;
        padding:9px;
        line-height: 1.7;
        margin-bottom:30px;
    }
    li .t{
        font-size: 18px;
        color:#92d5ff;
        padding-left:5px;
    }
    li img{
        width:100%;
    }
</style>