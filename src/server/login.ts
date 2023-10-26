import request from "@/utils/request"
import { md5 } from "js-md5"

//游客登录
export const loginData = () =>
    request({
        url: "/register/anonimous",
    })
//
export const userLogin = (profile: any) =>
    request({
        url: "/login",
        data: {
            email: profile.userName,
            md5_password: md5(profile.password),
        },
    })
