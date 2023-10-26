import { defineStore } from "pinia"
import { ref } from "vue"
import { getSongDetail, getSongUrl } from "@/server/songs"
import  { format } from "@/utils/format"
import { getLyric } from "@/server/songs"
export const songsStore = defineStore("songs", () => {
    const songId = ref<string | number>(0)
    const songUrl = ref<string>('')
    const artists = ref([])
    const imgUrl = ref([])
    const songName = ref<string>()
    const  lyricList=ref<any>([])
    //获取歌曲详情
    const getSongDetailData = async () => {
        const { songs } = await getSongDetail(songId.value)
    
        artists.value = songs[0]?.ar
        songName.value = songs[0]?.name
        // console.log('songName.value',songName.value);
        // const res= await getSongDetail(songId.value)
        // console.log('歌曲详情11111',res);
    }
    //获取音乐地址
    const getSongUrlData = async () => {
        const {data}= await getSongUrl(songId.value)
        // const res= await getSongUrl(songId.value)
        // console.log("音乐地址", res)
        songUrl.value = data[0]?.url 
        console.log(songUrl.value);
        
    }
    const getLyricData = async () => {
         lyricList.value=[]
        const res = await getLyric(songId.value)
        // console.log(res);
        const arr = res.lrc?.lyric.split(/[\n]/)
        const arrFilter = arr.filter((e: any) => e.length > 0)
        // console.log(arrFilter);

        arrFilter.forEach((e: any) => {
            const temp = e.split(/\[(.+?)\]/)
            const seconds = format(temp[1])
            // console.log(temp)
            // console.log(seconds)
            lyricList.value.push({
                Time: seconds,
                lyric: temp[2],
            })
        })
    }
    return {
        songId,
        songUrl,
        artists,
        songName,
        imgUrl,
        lyricList,
        getSongDetailData,
        getSongUrlData,
        getLyricData,
    }
})
