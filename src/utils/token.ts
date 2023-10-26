//缓存token
export const setToken=(key:string,value:any)=>{
    try {
        console.log("value",value);
        uni.setStorageSync(key, value);
        uni.showToast({
            title:'存储token成功',
            icon:'success'
        })
    } catch (e) {
        // error
    }
}
//获取token
export const getToken=(key:string)=>{
    try {
        const value = uni.getStorageSync(key);
        if (value) {
            console.log(value);
        }
    } catch (e) {
        // error
    }
}
//清除缓存
export const clearToken=()=>{
    try {
        uni.clearStorageSync();
        uni.showToast({
            title:'清除token成功',
            icon:'success'
        })
    } catch (e) {
        // error
    }
}