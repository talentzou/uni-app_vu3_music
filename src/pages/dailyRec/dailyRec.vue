<template>
    <view class="viewport">
        <!-- tabbar导航 -->
        <view class="nav">
            <navigator url="/pages/index/index" open-type="switchTab"><uni-icons type="home" size="30"></uni-icons></navigator>
            <template class="title">
                <text v-for="(text, index) in title" :key="text" class="text" @tap="changeStyle(index)" :class="{ active: index === activeIndex }">{{ text }}</text>
            </template>
            <navigator ><uni-icons type="more-filled" size="30"></uni-icons></navigator
        ></view>
        <!-- 播放全部 -->
        <view class="btn-play">
            <view><text>按鈕</text> <text>播放全部</text></view>
            <view class="refresh">
                <uni-icons type="loop" size="30"></uni-icons>
            </view>
        </view>
        <!-- 歌曲列表 -->
        <scroll-view class="scroll-view" scroll-y>
            <view class="list" v-for="item in 15" :key="item">
                <image src="@/static/icon/fire.png" class="image"></image>
                <view class="songInfo">
                    <text>1111</text>
                    <text>2222</text>
                </view>
                <uni-icons type="home" size="30" class="play"></uni-icons>
            </view>
        </scroll-view>
    </view>
</template>

<script lang="ts" setup>
    import { ref ,onMounted} from "vue"
    import {dailyRecData} from "@/server/dailyRec"
    const title = ["默认推荐", "风格推荐"]
    const activeIndex = ref<number>(0)
    const changeStyle = (index: any) => {
        activeIndex.value = index
        console.log(111)
    }
onMounted(async()=>{
    const res=await dailyRecData()
    console.log(res);
    
}) 
</script>

<style scoped lang="scss">
    page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }

    .nav {
        width: 100%;
        background-color: skyblue;
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
        .title {
            display: flex;
            justify-content: center;
            background-color: rgba(224, 224, 230, 0.3);
            border-radius: 20px;
            width: 180px;
            height: 33px;
            padding: 5px;

            .text {
                border: 1px solid #3b3838;
                border-radius: 30px;
                padding: 5px 10px;
                font-weight: 700;
            }
            .active {
                background-color: #fff;
            }
        }
    }
    .btn-play {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        background-color: greenyellow;
        height: 40px;
    }
    .scroll-view {
        box-sizing: border-box;
        height: 500px;
        .list {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
            .image {
                width: 50px;
                height: 50px;
            }
        }

        .songInfo {
         margin-left: 20px;
            text {
                display: block;
                padding: 5px;
            }
        }
           .play {
               position: absolute;
               right: 20px;
            }
    }
</style>
