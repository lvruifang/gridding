import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) 


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
}

//3.规则数组
const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      name:'login',
      component:() => import('@/views/loginPage'),
    },
    {
      path:'/guide',
      name:'guide',
      component:() => import('@/views/guidePage'),
    },
    {
      path:'/zhfy', //智慧防疫
      name:'zhfy',
      component:() => import('@/views/epidemicPrevention'),
      children:[
        {
          path: 'ldry', //流动人员
          name: 'ldry',
          component:() => import('@/components/epidemicPrevention/floatingPersonnel'),
        },
        {
          path: 'ldryxq', //流动人员详情
          name: 'ldryxq',
          component:() => import('@/components/epidemicPrevention/floatingPersonnelDetail'),
        },
        {
          path: 'zdfyd', //流动人员
          name: 'zdfyd',
          component:() => import('@/components/epidemicPrevention/KeyEpidemicPoints'),
        },
        {
          path: 'lddw', //流掉队伍
          name: 'lddw',
          component:() => import('@/components/epidemicPrevention/loseTeam'),
        },
        {
          path: 'sd', //哨点
          name: 'sd',
          component:() => import('@/components/epidemicPrevention/sentinelPoint'),
        },
        {
          path: 'hscjd', //哨点
          name: 'hscjd',
          component:() => import('@/components/epidemicPrevention/hsCollectionPoint'),
        },
        {
          path: 'ymxx', //疫苗信息
          name: 'ymxx',
          component:() => import('@/components/epidemicPrevention/vaccineInformation'),
        },
        {
          path: 'sdfx', //三道防线
          name: 'sdfx',
          component:() => import('@/components/epidemicPrevention/defensiveLine'),
        }
      ]
    },
    {
      path:'/bigData', //大数据
      name:'bigData',
      component:() => import('@/views/bigData'),
      children:[
        {
          path: 'djfx', //党建分析
          name: 'djfx',
          component:() => import('@/components/bigData/PartyAnalysis'),
        },
        {
          path: 'fyfx', //防疫分析
          name: 'fyfx',
          component:() => import('@/components/bigData/preventionAnalysis'),
        },
        {
          path: 'zzfx', //综治分析
          name: 'zzfx',
          component:() => import('@/components/bigData/comprehensiveAnalysis'),
        },
        {
          path: 'wgfx', //网格分析
          name: 'wgfx',
          component:() => import('@/components/bigData/gridAnalysis'),
        },
        {
          path: 'jzfx', //网格-建筑分析
          name: 'jzfx',
          component:() => import('@/components/bigData/gridArchitecture'),
        },
        {
          path: 'rkfx', //网格-建筑分析
          name: 'rkfx',
          component:() => import('@/components/bigData/gridPopulation'),
        }
      ]
    },
    {
      path:'/zhwg', //智慧网格
      name:'zhwg',
      component:() => import('@/views/smartGrid'),
      children:[
        {
          path: 'sy', //首页
          name: 'sy',
          component:() => import('@/components/smartGrid/gridIndex'),
        },
      ]
    },
    {
      path:"/zhdj", //智慧党建
      name:'zhdj',
      component:() => import('@/views/partyBuilding'),
      children: [
        {
            path: 'zzjg', //组织架构
            name: 'zzjg',
            component:() => import('@/components/partyBuilding/organizationalStructure'),
        },
        {
          path: 'dzzgl', //党组织管理
          name: 'dzzgl',
          component:() => import('@/components/partyBuilding/organizationManagement'),
        },
        {
          path: 'lwgbgl', //两委干部管理
          name: 'lwgbgl',
          component:() => import('@/components/partyBuilding/personnelAdministration'),
        },
        {
          path: 'dygl', //党员管理
          name: 'dygl',
          component:() => import('@/components/partyBuilding/partyManagement'),
        },
        {
          path: 'hygl', //会议管理
          name: 'hygl',
          component:() => import('@/components/partyBuilding/meetingsManagement.vue'),
        },
      ]
    }
]
//4.生成路由对象
export default new Router({
  routes ,//routes是固定key(传入规则数组 名字一样可以简写)
  // mode:'history'
})
