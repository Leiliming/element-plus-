import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App)
//全局注册图标 牺牲一点性能
//el-icon-xxx
for (let i in Icons) {
  console.log((Icons as any)[i])
}
app.use(router).use(ElementPlus)
app.mount('#app')