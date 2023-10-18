/// <reference types="vite/client" />
import svgIcon from "./components/svgIcon/svgIcon.vue"
import Play from "@/components/play/play.vue"
import navCustom from "@/components/navCustom/navCustom.vue"
declare module '*.vue' {
  import { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component

}
//环境变量类型
interface ImportMetaEnv {
  readonly VITE_SERVER_API: string
  readonly VITE_MUSIC_title:string
  // 更多环境变量...
}
//自定义组件类型声明
declare module 'vue' {
  export interface GlobalComponents {
    svgIcon: typeof svgIcon,
    Play:typeof Play,
    navCustom:typeof navCustom
  }
}