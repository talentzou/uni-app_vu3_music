export const setToken=(key:string,value:any)=>{
    try {
        console.log("value",value);
        
        uni.setStorageSync(key, value);
    } catch (e) {
        // error
    }
}
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
export const clearToken=()=>{
    try {
        uni.clearStorageSync();
    } catch (e) {
        // error
    }
}