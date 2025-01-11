import { createRouter, createWebHistory } from 'vue-router'
import lineData from '../data/lines.json'
import articleData from '../data/pageData.json'
import ichihiraStopData from '../data/ichihiraStops.json'
import TopView from '../views/TopPage.vue'
import TopEn from '../views/TopPageEn.vue'
import timeTable from '../views/timeTable.vue'
import Search from '../views/search.vue'
import StopPage from '../views/stops/stopPage.vue';
import { component } from 'v-viewer'


// ichihiraStopDataのすべての駅をルートに追加するための処理
const ichihiraStopRoutes = ichihiraStopData.map(stop => ({
  path: stop.link,
  children: [
    {
      path: '', // 停車駅のメインページ
      name: stop.name.ja,
      component: StopPage,
    },
    ...stop.stopTime.map(time => ({
      path: `${time.arrival.en.replace(/\s+/g, '')}-${String(time.time.hour).padStart(2, '0')}${String(time.time.minute).padStart(2, '0')}-${time.schedule}`,
      component: timeTable,
    })),
  ],
}));

const articles = articleData.map(article => ({
  path: article.id,  
  // name: article.title, 
  component: () => import('../views/article.vue'),  // 停車駅のコンポーネントを動的にインポート
}));

const ichihiraStopRoutesEn = ichihiraStopData.map(stop => ({
  path: stop.link,
  children: [
    {
      path: '', // 停車駅のメインページ
      name: stop.name.en,
      component: StopPage,
    },
    ...stop.stopTime.map(time => ({
      path: `${time.arrival.en.replace(/\s+/g, '')}-${String(time.time.hour).padStart(2, '0')}${String(time.time.minute).padStart(2, '0')}-${time.schedule}`,
      component: timeTable,
    })),
  ],
}));

const articlesEn = articleData.map(article => ({
  path: article.id,  
  name: `${article.title}-en`, 
  component: () => import('../views/article.vue'), // 記事コンポーネントを動的にインポート
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
        },
        {
          path: 'article',
          children: [
            ...articles,
          ],
        },
        {
          path:'search',
          component: Search,
        },
        {
          path: 'ichihira',
          children: [
            {
              path: '',
              name: 'ichihiraTop',
              component: () => import('../views/stops.vue'),
            },
            ...ichihiraStopRoutes,
          ],
        },
      ],
    },
    {
      path: '/en',
      name: 'homeEn',
      children: [
        {
          path: '',
          name: 'enTop',
          component: TopEn,
        },
        {
          path:'search',
          component: Search,
        },
        {
          path: 'ichihira',
          children: [
            {
              path: '',
              name: 'ichihiraTopEn',
              component: () => import('../views/stops.vue'), // 英語版のトップ
            },
            ...ichihiraStopRoutesEn,
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
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
