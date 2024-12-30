import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

const app = createApp(App)

app.use(router)
app.use(VueViewer)

VueViewer.setDefaults({
     "inline": false, 
     "button": true, 
     "navbar": true, 
     "title": true, 
     "toolbar": true, 
     "tooltip": false, 
     "movable": false, 
     "zoomable": true, 
     "rotatable": false, 
     "scalable": false, 
     "transition": true, 
     "fullscreen": true, 
     "keyboard": false
    })

app.mount('#app')
