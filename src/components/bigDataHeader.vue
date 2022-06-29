<template>
    <div>
        <div class="header">
            <div class="user">
                <img src="@/assets/images/icon-user.png" alt="">
                <span>网格员</span>
                <a href="javascript:;">退出</a>
            </div>
            <div class="title">
                <img class="logo" src="@/assets/images/logo.png" alt="">
                <span>东花园镇智慧网格系统</span> 
            </div>
            <div class="date">
                {{ new Date() | formatDate}}
            </div>
            <a class="djfx" @click="djfx()" href="javascript:;">党建分析</a>
            <a class="wgfx" href="javascript:;"  @click="wgfx()">网格分析</a>
            <a class="fyfx" href="javascript:;" @click="fyfx()">防疫分析</a>
            <a class="zzfx" href="javascript:;" @click="zzfx()">综治分析</a>
            <img class="cur" :style="{left:left}" src="@/assets/images/headerCur.png" alt="">
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'bigDataHeader',

    data() {
        return {
            left:"19.27%"
        };
    },
     filters:{
        formatDate(val){
            return moment(val).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    mounted() {
        
    },

    methods: {
        go(url){
            this.$router.push({path:url});
        },
        djfx(){
             this.left="19.27%";
            this.$router.push({path:'/bigData/djfx'});
        },
        fyfx(){
            this.left="65.6%";
            this.$router.push({path:'/bigData/fyfx'});
        },
        zzfx(){
            this.left="75%"
            this.$router.push({path:'/bigData/zzfx'});
        },
        wgfx(){
            this.left="28.28%"
            this.$router.push({path:'/bigData/wgfx'});
        }
    },
};
</script>

<style scoped>
     .header{
       display: flex;
       justify-content: space-between;
       font-size: 18px;
       color:#92d5ff;
       width:100%;
       height:111px;
       padding:0 26px;
       background: url("@/assets/images/header1-bg.png")  no-repeat center center;
       background-size: 100% 100%;
       position: relative;
       z-index: 2;
      
   }
   .cur{
       position: absolute;

       bottom:40px;
       width:125px;

   }
   .djfx,.wgfx,.fyfx,.zzfx{
       font-size: 20px;
       color:#92d5ff;
       font-weight:bold;
       position: absolute;
       left:18.85%;
       top:20%;
   }
   .wgfx{
       left:28.17%;
   }
   .fyfx{
       left:68.697%;
   }
   .zzfx{
       left:77.7%;
   }
    .header .title{
        font-size: 36px;
        color:#fff;
        display: flex;
        align-items: center;
        height:71px;
        background-image: linear-gradient(to bottom, #7feeff, #0973c9);
         -webkit-background-clip:text; 
        -webkit-text-fill-color:transparent; 
    }
    .header .title .logo{
        width:55px;
        margin-right:20px;
    }
    .header .user{
        font-size:18px;
        color:#ffc70c;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:176px;
        height:71px;;
    }
    .header .user a{
        color:#92d5ff;
    }
    .header .date{
        height: 71px;
        line-height: 71px;
    }
</style>