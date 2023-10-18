import { defineStore } from "pinia"
import { ref } from "vue"
import { getSongDetail, getSongUrl } from "@/server/songs"
export const songsStore=defineStore('songs',()=>{
    const songId=ref<string|number>(347230)
    const songUrl=ref<string>('')
    //获取歌曲详情
    const getSongDetailData= async()=>{
        const  res=await getSongDetail(songId.value)
        console.log('歌曲详情',res);      
    }
    //获取音乐地址
    const getSongUrlData=async()=>{
        const res= await getSongUrl(songId.value)
        console.log('音乐地址',res);
        songUrl.value=res.data[0].url
        // console.log('mmm',res.data[0].url);
        
    }
    return {
        songId,
        songUrl,
        getSongDetailData,
        getSongUrlData,
    }
})