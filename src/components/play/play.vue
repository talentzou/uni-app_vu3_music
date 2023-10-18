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
            @tap="playMusic"></svgIcon>
        <svgIcon
            icon="icon-bofangzhong"
             v-else
            @tap="playMusic"></svgIcon>
        <svgIcon icon="icon-bofangliebiao"></svgIcon>
    </view>
</template>

<script setup lang="ts">
    // import { onShow } from "@dcloudio/uni-app"
    import {  ref,watch } from "vue"
    import { songsStore } from "@/store/modules/songs";
    const $songStoreData=songsStore()
    console.log('$songStoreData',$songStoreData);
    
    let isShow= ref< boolean >(true)
     //eslint-disable-next-line no-undef
    const innerAudioContext = uni.createInnerAudioContext()
    innerAudioContext.src = "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3"
    const play = (is:any) => {
        if (!is) {
            console.log(1111)
            innerAudioContext.play()
        } else {
            console.log(2222)
            innerAudioContext.pause()
        }
        console.log("音频是否在播放", innerAudioContext.paused)

        innerAudioContext.onPause(() => {
            console.log(3333)
        })
        // innerAudioContext.onPlay(() => {
        //     console.log("开始播放")
        // })
        innerAudioContext.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
        })
    }
    const playMusic = async () => {
        isShow.value = !isShow.value
        await play(isShow.value)
    }
    
    watch(()=>$songStoreData.songId,(newVal,oldVal)=>{
      console.log(newVal,oldVal);
      
    })
    defineExpose({ play })
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
