import request from "@/utils/request"
import type { banners,tabbarData } from "@/types/home"
//广告
export const getBannerRes = () =>
    request<banners[]>({
        url: "/banner",
    })
//主页发现导航
export const homepage = () =>
    request<tabbarData[]>({
        url: "/homepage/dragon/ball",
    })


type Homepage={
    [property:string]:any,
    block:[]
}
//首页发现信息
export const getHomepage = () =>
    request< Homepage>({
        url: "/homepage/block/page",
        method: "GET",
        data: {
            refresh: false,
        },
    })
    ////playlist/detail?id=24381616  /playlist/track/all
//歌单详情
export const getPlaylistDetail = (id:string) =>
    request<any>({
        url: "/playlist/detail",
        data: {
           id
           //24381616
           //8803127688
        },
    })
    //获取所有歌单歌曲
    export const getPlaylistTrackAll = (id:string) =>
    request<any>({
        url: "/playlist/track/all",
        data: {
           id,
           limit:30,
           offset:0

        },
    })
