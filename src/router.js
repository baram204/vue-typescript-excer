import Vue from 'vue'
import Router from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'
import Home from './views/Home.vue'

Vue.use(Router)
// 컴포넌트 임포트 안 하고, 라우터 링크만 보고 자기가 알아서 컴포넌트 자동 임포트 해주는 유틸
// https://github.com/egoist/vue-router-prefetch
Vue.use(RouterPrefetch)

export default routerConfig =>
  new Router({
    // 라우팅 시 스크롤 관련 컨트롤 메소드, html5 history 모드에서만 작동함
    // https://router.vuejs.org/kr/guide/advanced/scroll-behavior.html
    // 페이지 이동 시
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition // 저장된 위치나
      }
      return {x: 0, y: 0} // 0,0 으로 이동
    },
    // 이건 뭐야? 자기 자신을 spread 하나? 이게 대체 뭐지?
    ...routerConfig,
    // 모든 접근은 Home 이 처리한다.
    routes: [
      {
        path: '*',
        component: Home
      }
    ]
  })
