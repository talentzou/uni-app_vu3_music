import request from "@/utils/request";
//获取歌曲详情
export const getSongDetail=(ids:string|number)=>request({
    url:'/song/detail',
    data:{
        ids
    }
})
//获取音乐url
type getSongUrl={
  [property:string]:any,
  url:string
}
export const getSongUrl=(id:string|number)=>request<getSongUrl>({
  url:'/song/url/v1',
  data:{
    id,
    level:'standard'

  }
})
//song/url/v1
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLyric=(id:string|number)=>request<any>({
  url:'/lyric',
  data:{
    id,
  }
})