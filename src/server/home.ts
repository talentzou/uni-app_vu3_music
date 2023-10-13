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
//歌单
export const getPlaylistReq = () =>
    request<any>({
        url: "/personalized",
        method: "GET",
        data: {
            limit: 8,
        },
    })
// //推荐新歌
export const getPodcastReq = () =>
    request<any>({
        url: "/personalized/newsong",
        method: "GET",
        data: {
            limit: 6,
        },
    })
//首页发现信息
export const getHomepage = () =>
    request<any>({
        url: "/homepage/block/page",
        method: "GET",
        data: {
            refresh: false,
        },
    })
