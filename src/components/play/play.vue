<template>
    <view class="view">
        <view
            ><image
                src="@/assets/login.jpg"
                class="image"></image
        ></view>
        <view class="play"><text class="bb">111111111111111111111111111111111111111111111111111111</text></view>
        <svgIcon
            icon="icon-zanting"
            v-if="isShow"
            @tap="playBtn"></svgIcon>
        <svgIcon
            icon="icon-bofangzhong"
            v-else
            @tap="btnState"></svgIcon>
        <svgIcon icon="icon-bofangliebiao"></svgIcon>
    </view>
</template>

<script setup lang="ts">
    // import { onShow } from "@dcloudio/uni-app"
    import { ref, watch } from "vue"
    import { songsStore } from "@/store/modules/songs"
    const $songStoreData = songsStore()
    // console.log("$songStoreData", $songStoreData)
    //播放按钮图标切换
    let isShow = ref<boolean>(true)
    //音乐实例
    let innerAudioContext = uni.createInnerAudioContext()
    innerAudioContext.onPlay(() => {
        console.log("暂停事件触发")
    })
    innerAudioContext.onPause(() => {
        console.log("暂停事件触发")
    })
    const playMusic = async () => {
        isShow.value = !isShow.value
        isPlay = false
        innerAudioContext.autoplay = true
        innerAudioContext.src = $songStoreData.songUrl
        innerAudioContext.onError((res) => {
            console.log(res?.errMsg)
            console.log(res?.errCode)
        })
    }
    //播放暂停按钮
    //音乐实例控制
    let isPlay = true
    const btnState = () => {
        if (!isPlay) {
            console.log("播放")
            innerAudioContext.play()
            isPlay = !isPlay
        } else {
            console.log("音乐暂停")
            innerAudioContext.pause()
            isPlay = !isPlay
        }
        isShow.value = !isShow.value
    }
    //播放音乐icon·
    const playBtn = async () => {
        await playMusic()
    }
    //监听歌曲id变化
    watch(
        () => $songStoreData.songId,
        (newVal, oldVal) => {
            isPlay = true
            innerAudioContext.destroy()
            console.log(newVal, oldVal)
            innerAudioContext = uni.createInnerAudioContext()
        }
    )
    defineExpose({ playMusic, isShow })
</script>

<style scoped lang="scss">
    .view {
        width: 100%;
        box-sizing: border-box;
        height: $uni-nav-bottom;
        display: flex;
        padding: 0 5px;
        align-items: center;
    }
    .image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
    // .play {
    //     width: 250px;
    //     .text {
    //         width: 150px;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow:ellipsis;
    //         background-color: red;
    //     }
    // }
    .play {
        width: 250px; /* 这里设置固定宽度 */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text {
            margin-right: 10px;
        }
    }
</style>
