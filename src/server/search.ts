import request from "@/utils/request"
//热搜列表(详细)
export  const getSearchHotDetail=()=>request({
    url:'/search/hot'
})
//搜索
export  const getSearchMultiMatch=(keywords:string)=>request({
    url:'/cloudsearch',
    data:{
        keywords
    }
})
//所有榜单内容摘要/toplist/detail
export  const getToplistDetail=()=>request({
    url:'/toplist',
   
})