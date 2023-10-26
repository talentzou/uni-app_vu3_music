import { defineStore } from "pinia"
import { songsStore } from "./songs"
import { ref } from "vue"

export const audioStore = defineStore("audio", () => {
    const $songStoreData = songsStore()
    //音乐实例
    let innerAudioContext = uni.createInnerAudioContext()
    //总时长
    const maxTime = ref<number>(0)
    //当前时间
    const currentTime = ref<number>(0)
    //播放状态
    const isPlayState = ref<boolean>(true)
    /* 初始化音乐 */
    const initMusic = async (songId?: string | number) => {
        console.log("jinru")
        $songStoreData.songId = songId as string
        await $songStoreData.getSongDetailData()
        await $songStoreData.getSongUrlData()
        innerAudioContext.autoplay = true
        innerAudioContext.src = $songStoreData.songUrl
        isPlayState.value = false
        //暂停事件
        innerAudioContext.onPause(() => {
            console.log("暂停事件发生")
            // pauseTime.value=innerAudioContext.currentTime
        })
        //播放错误
        innerAudioContext.onError((res) => {
            console.log("播放错误")
            console.log(res?.errMsg)
            console.log(res?.errCode)
        })
        innerAudioContext.onCanplay(() => {
            console.log("开始播放")
            console.log(innerAudioContext.duration)
            maxTime.value = innerAudioContext.duration
        })
        //自然播放结束事件
        innerAudioContext.onEnded(() => {
            console.log("播放结束")
            currentTime.value = 0
            maxTime.value = 0
            isPlayState.value = true
        })
        // 播放进度事件
        innerAudioContext.onTimeUpdate(() => {
            currentTime.value = innerAudioContext.currentTime
            // console.warn(66666)
        })
    }
    /* destroy音乐实例 */
    const destroyInstance = () => {
        innerAudioContext.destroy()
        innerAudioContext = uni.createInnerAudioContext()
    }
    /*   播放与暂停 */
    const playAndPause = () => {
        if ($songStoreData.songUrl === "") {
            return uni.showToast({ title: "请先选择一首歌", icon: "none" })
        }
        isPlayState.value ? innerAudioContext.play() : innerAudioContext.pause()
        isPlayState.value = !isPlayState.value
    }
    /* 移动时间 */
    const movePlayTime = (moveTime?: any) => {
        currentTime.value = moveTime
        innerAudioContext.seek(moveTime)
    }
    //开始播放事件
   
    return {
        maxTime,
        currentTime,
        initMusic,
        destroyInstance,
        playAndPause,
        isPlayState,
        movePlayTime,
    }
})

/*
 */
