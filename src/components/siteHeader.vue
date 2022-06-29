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
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'siteHeader',

    data() {
        return {
            
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
       background: url("@/assets/images/header-bg.png")  no-repeat center center;
       background-size: 100% 100%;
       position: relative;
       z-index: 2;
      
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