import { createRouter, createWebHistory } from 'vue-router'
import lineData from '../data/lines.json'
import stopData from '../data/stops.json'
import TopView from '../views/TopPage.vue'



// stopDataのすべての駅をルートに追加するための処理
const stopRoutes = stopData.map(stop => ({
  path: stop.link,  // 停車駅のpathをルートのpathに設定
  name: stop.name.en,   // 停車駅の英語版nameをルートのnameに設定
  component: () => import('../views/stops/stopPage.vue'),  // 停車駅のコンポーネントを動的にインポート
}));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  _routes: [
    {
      path: '/',
      redirect: '/ja',
    },
    {
      path: '/ja',
      name: 'home',
      children: [
        {
          path: '',
          name: 'jaTop',
          component: TopView,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        },
        {
          path: 'stops',
          name: 'stops',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ichihiraStops.vue'),
        },
        {
          path: 'ichihira',
          children: [
            {
              path: '',
              name: 'ichihiraTop',
              component: () => import('../views/ichihiraStops.vue'),
            },
            ...stopRoutes,
          ],
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*', // 未定義のルートをキャッチ
      name: 'NotFound',
      component: () => import('../views/404.vue'),
    },
  ],
  get routes() {
    return this._routes
  },
  set routes(value) {
    this._routes = value
  },
  scrollBehavior(to, from, savedPosition) {
    // savedPositionがある場合（ブラウザの戻る/進む時）はそれを使う
    if (savedPosition) {
      return savedPosition;
    }
    // 通常のページ遷移時にはページトップへスクロール
    return { top: 0 };
  },
})

export default router
