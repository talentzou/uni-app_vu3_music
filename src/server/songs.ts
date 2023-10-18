import request from "@/utils/request";
//获取歌曲详情
export const getSongDetail=(ids:string|number)=>request({
    url:'/song/detail',
    data:{
        ids
    }
})
//获取音乐url
export const getSongUrl=(id:string|number)=>request({
  url:'/song/url/v1',
  data:{
    id,
    level:'standard'

  }
})
//song/url/v1