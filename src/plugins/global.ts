import svgIcon from "@/components/svgIcon/svgIcon.vue"
import Play from "@/components/play/play.vue"
import navCustom from "@/components/navCustom/navCustom.vue"
const globalComponents:any={svgIcon,Play,navCustom}
export default {
    install(app:any){
        Object.keys(globalComponents).forEach((key)=>{
            app.component(key,globalComponents[key])   
        })
        
    },
}
