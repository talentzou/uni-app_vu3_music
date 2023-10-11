import { defineStore } from "pinia"
import { ref } from "vue"
import { loginData } from "@/server/login"
import type { user } from "@/types/user"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getToken, setToken, clearToken } from "@/utils/token"
export const userStore = defineStore("user", () => {
    // 用户信息
    const profile = ref<user>({})
    const cookie=ref<string>()
    const test = (val) => {
        console.log("5555555555555555",val);
        
        setToken("cookie", val)
    }
    const clear=()=>{
       getToken('cookie')
    }
    const login=async()=>{
         const res= await loginData()
        //  login.value=res
        //  console.log("data",login.value);
         cookie.value=res.cookie
         console.log("cookie",cookie.value);
         test(res.cookie)
    }
    return {
        profile,
        test,
        clear,
        login,
    }
})
