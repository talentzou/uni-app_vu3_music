//import { userStore } from "@/store/modules/user";

export interface responseData<T> {
    code: number
    data: T
    message: string
    banners?:any
}
const baseUrl = "https://music.zouhjweb.top"
/**
 * @options 网络请求配置对象
 */
const httpInterceptor = {
    //拦截触发调用
    invoke(options: any) {
        // console.log(options);

        //网络地址拼接
        options.url = baseUrl + options.url
        console.log(options.url);
        
        //添加超时时间
        options.timeout = 5000
        // const value = uni.getStorageSync('cookie');
            //添加token
            options.header = {
                ...options.header,
                // "Cookie":value
                //配置请求来源
            }
        //携带用户代理身份的凭据
        // const token='111'
        // options.header.Authorization=token
        // console.log('99999999999',process.env.NODE_ENV);
    },

    //
}
//网络响应
const request = <T>(options: any) => {
    return new Promise<responseData<T>>((resolve, reject) => {
        uni.request({
            //合并请求配置
            ...options,
            success: (res: any) => {
                resolve(res.data as  responseData<T>)
            },
            fail: (err: responseData<T>) => {
                reject(err.data)
            },
        })
    })
}
//请求拦截器
uni.addInterceptor("request", httpInterceptor)
export default request
