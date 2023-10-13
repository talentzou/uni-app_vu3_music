import { createSSRApp } from "vue";
import App from "./App.vue";
import { pinia } from "./store";
import '@/static/music-icon/iconfont'
import globalComponents from '@/plugins/global'
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia)
  app.use(globalComponents)
  return {
    app,
  };
}
