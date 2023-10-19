<template>
    <view>111</view>
    <button @click="playAudio">播放音频</button>
</template>

<script lang="ts" setup>

    // import { onUnload } from "@dcloudio/uni-app"
    // import { onMounted } from "vue"
    // const innerAudioContext = uni.createInnerAudioContext()
    // const haha = () => {
    //     innerAudioContext.autoplay = true
    //     innerAudioContext.src = "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3"
    //     console.log(5555)
    //     innerAudioContext.play()
    //     innerAudioContext.onPlay(() => {
    //         console.log("开始播放")
    //     })
    //     innerAudioContext.onError((res) => {
    //         console.log(res.errMsg)
    //         console.log(res.errCode)
    //     })
    // }
    // onMounted(() => {
    //     haha()
    // })
    // onUnload(() => {
    //     console.log(9999)

    //     innerAudioContext.destroy()
    // }

// 在相关的方法中播放音频
const playAudio = () => {
  const innerAudioContext = uni.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
  innerAudioContext.onPlay(() => {
    console.log('开始播放');
  });
  innerAudioContext.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
  });
}
</script>

<style scoped lang="scss"></style>
