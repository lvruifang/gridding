import Vue from 'vue' //引入vue对象，类似于<script src="vue.js"></script> 就像我们引入jquery得到一个$一样
import App from './App.vue' //App.vue文件里对象引入过来（vue项目页面入口）
import router from './router' //1.引入
// import iView from 'iview'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import 'iview/dist/styles/iview.css'
import '@/assets/css/common.css'
import '@/assets/js/index'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'KG1GvyvEpQ16ogMjFgFf1wPWYZ65ysBx'
})

Vue.use(ElementUI);
Vue.config.productionTip = false   //
Vue.prototype.echarts = echarts
Vue.prototype.$echarts = function (el) {
  return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$fontSize = function (res) {
    const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = clientWidth / 1920;
    return res * fontSize;
},



new Vue({  // 开始实例化vue
  router,
  render: h => h(App),  //准备渲染App页面
}).$mount('#app') //渲染到index.html文件里id叫app的标签上


