import request from "@/utils/request";
//推荐视频
export const getVideoResponseData=()=>request({
    url:'/video/timeline/recommend?offset=10',
    // data:{
    //     offset:5
    // }
})
//mv
export const getMvResponseData=()=>request({
    url:'/mv/first',
    data:{
        limit:10
    }
})
//是视频分类列表
export const getVideoGroupListResponseData=()=>request({
    //获取视频标签列表
    // url:'/video/group/list',
    //获取视频分类列表
    // url:'/video/category/list',
    //获取视频标签/分类下的视频
    //url:'/video/group?id=9104'
    url:'/video/timeline/all',
})