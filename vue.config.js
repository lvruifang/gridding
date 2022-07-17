const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    transpileDependencies: true,
    devServer: {
      host:'dhy.jrckeji.com',
      port:80,
      proxy:{
          '/api': {
            target: 'http://dhyapi.jrckeji.com/', // 要代理的目标地址  dhyapi.jrckeji.com
            ws:true,
            changeOrigin: true ,// 是否跨域
            pathRewrite: {
              '^/api': '' // 相当于将跨域代理之后的地址进行再次替换 就可以将 /api去掉
            }
        }
      }
    },
    lintOnSave:false,
    publicPath: './',
  },
  
)
