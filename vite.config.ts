import { defineConfig, loadEnv } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
//import path from 'path'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [uni()],
//   server:{
//     proxy:{
//       '/api':{
//         target:'https://music.zouhjweb.top',
//         changeOrigin:true,
//         rewrite: (path)=>path.replace(/^\/api/,"")
//       }
//     }
//   }
// });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "")
    console.log("我是网址",env.VITE_SERVER_API);
    
    return {
        plugins: [uni()],
        server: {
            proxy: {
                "/api": {
                    target: "https://music.zouhjweb.top",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
    }
})
