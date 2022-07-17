<template>
    <div class="login">
        <div class="header">
            <img src="@/assets/images/login-header.png" alt="" class="logoImg">
        </div>
        <div class="wrap">
            <div class="left">
                 <p>WELCOME TO SCRM SYSTEM</p>
                <p>数据列表分析 可视化数据查询</p>
                <p>科技让数据触手可及</p>
            </div>
            <div class="loginBox">
               <div class="loginInner">
                    <div class="box">
                        <div class="logo">
                            <img src="@/assets/images/logo.png" alt="">
                            <p>东花园镇智慧网格系统</p>
                        </div>
                        <!-- <div class="form">
                            
                            <div class="item"> 
                                <img src="@/assets/images/login-user.png" alt="">
                                <input type="text" placeholder="请输入用户名">
                            </div>
                             <div class="item">
                                 <img src="@/assets/images/login-password.png" alt="">
                                 <input type="password" placeholder="请输入用户密码">
                             </div>
                             <div class="aboutPassword">
                                  <el-checkbox label="记住密码"></el-checkbox>
                                  <a href="javascript:;">忘记密码?</a>
                             </div>
                             <a href="javascript:;" class="btn" @click="login()">登录</a>
                        </div> -->
                         <div class="form">
                            <h2>用户登录</h2>
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                                <el-form-item  prop="user_name">
                                    <el-input v-model="ruleForm.user_name" prefix-icon="el-icon-user"  placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item  prop="password">
                                    <el-input v-model="ruleForm.password" prefix-icon="el-icon-unlock"  placeholder="请输入密码"></el-input>
                                </el-form-item>
                                <!-- <div class="aboutPassword">
                                    <el-checkbox label="记住密码"></el-checkbox>
                                    <a href="javascript:;">忘记密码?</a>
                                </div> -->
                                <a href="javascript:;" class="btn" @click="submitForm('ruleForm')">登录</a>
                            </el-form>
                        </div> 
                        
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '@/api/user'
export default {
    name: 'loginPage',

    data() {
        return {
            ruleForm:{
                 user_name:"",
                password:""
            },
            rules:{
                 user_name:[
                    {required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                    {required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },

    mounted() {    
    },
    methods: {
         submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.submit();
            } else {
                return false;
            }
        });
      },
       async submit () {
            try {
                const {data} = await login(this.ruleForm);
                this.$router.push({name:"guide"})
            } catch (err) {
                  this.$message({
                    message: err,
                    offset:400,
                    type: 'success'
                });
            }
        }
    },
};
</script>

<style scoped>
    .header{
        width:100%;
        height:106px;
        background-color: #eff0f2;
        display: flex;
        align-items: center;
    }
    .logoImg{
        width:496px;
        margin-left:30px;
    }
    .wrap{
        color:#fff;
        width:100%;
        height:500px;
        display: flex;
        align-items: center;
        height: calc(100% - 106px);
        padding:0 6%;
        justify-content: space-between;
    }
    .wrap .left{
        line-height: 1.8;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        letter-spacing: 2px;
    }
    .wrap .left p:first-child{
        font-size:30px;
    }
    .wrap .left p:nth-child(2){
        font-size: 44px;
    }
    .wrap .left p:nth-child(3){
        font-size: 32px;
    }
    .loginBox{
        width:833px;
        height: 504px;
        background: url("@/assets/images/login-bg.png") no-repeat center center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loginInner{
        width:794px;
        height:468px;
        background-color: rgba(255,255,255,0.2);
        border:solid 1px #0a2455;
        padding:15px;
    }
    .box{
        width:100%;
        height:100%;
        background-color: #fff;
        border:solid 1px #1a8bff;
        padding:0 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .box .logo img{
        width:230px;
        margin-bottom:20px;
    }
     .box .logo{
         font-size: 23px;
         color:#1a0036;
     }
     h2{
         font-size:30px;
         color:#8c2c4d;
         text-align: center;
         margin-bottom:35px;
     }
     .form{
         width:317px;
         font-family: "微软雅黑";
         
     }
     .form .item{
         height:44px;
         width: 100%;
         border:solid 1px #1d4daf;
         margin-bottom:40px;
         align-items: center;
         display: flex;
         padding-left: 12px;
     }
      .form .item input{
          flex:1;
          height:16px;
          border:none;
          border-left:solid 2px  #1d4daf;
          margin-left:10px;
          padding-left:16px;
          font-size: 16px;
          outline: none;
      }
      .form .btn{
          width:100%;
          height:44px;
          border-radius: 5px;
          font-size: 20px;
          color:#fff;
          background-color: #5751ed;
          display: block;
          text-align: center;
          line-height: 44px;
          background-image: linear-gradient(365deg, #5a49ea 0%, #2fbafb 100%);
      }
        .aboutPassword{
           margin-bottom:30px;
           
            display: flex;
            justify-content: space-between;
        }
        .aboutPassword a{
            font-size: 12px;
            color:#324bca;
        }
</style>