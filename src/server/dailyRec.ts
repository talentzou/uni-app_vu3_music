///recommend/songs
import request from "@/utils/request";
export const dailyRecData=()=>request({
    url:"/recommend/songs"
})