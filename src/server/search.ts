import request from "@/utils/request"
//热搜列表(详细)
type searchHot = {
    hots: []
}
export const getSearchHotDetail = () =>
    request<searchHot>({
        url: "/search/hot",
    })
//搜索
type cloudsearch = {
    searchQcReminder: null
    songCount: number
    songs: []
}
export const getSearchMultiMatch = (keywords: string) =>
    request<cloudsearch>({
        url: "/cloudsearch",
        data: {
            keywords,
        },
    })
//所有榜单内容摘要/toplist/detail
export const getToplistDetail = () =>
    request({
        url: "/toplist",
    })
