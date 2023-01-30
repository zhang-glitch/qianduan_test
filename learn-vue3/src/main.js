import { createApp } from 'vue'
import App from './App.vue'
// import App1 from './App1.vue'
// import App2 from './App2.vue'
// import App3 from './App3.vue'
// import App4 from './App4.vue'
// import NonRecursion from './NonRecursion.vue'
// import ToRaw from './ToRaw.vue'
// import MarkRaw from './MarkRaw.vue'
// import AcquireDom from './AcquireDom.vue'
// import Readonly from './Readonly.vue'
import './index.css'
import router from './router'

// createApp(App).mount('#app')
// createApp(App1).mount('#app')
// createApp(App2).mount('#app')
// createApp(App4).mount('#app')
createApp(App).use(router).mount('#app')
// createApp(ToRaw).mount('#app')
// createApp(MarkRaw).mount('#app')
// createApp(Readonly).mount('#app')
