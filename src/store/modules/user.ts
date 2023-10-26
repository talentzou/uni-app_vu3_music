import { defineStore } from "pinia"
import { ref } from "vue"
import  {userLogin} from '@/server/login'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getToken, setToken, clearToken } from "@/utils/token"
export const userStore = defineStore("user", () => {
    const avatar=ref<string>('')
    const token = ref<string>("kkkkkk")
    const storage = (val:string) => {
        setToken("token", val)
    }
    //清除
    const clear = () => {
        getToken("token")
    }
    //登录
    const login=async(profile:any)=>{
        console.log(profile);
        const res=await userLogin(profile)
        console.log(res);
        
    }
    return {
        // profile,
        storage,
        clear,
        token,
        login,
        avatar,
    }
})
