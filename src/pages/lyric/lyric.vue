<template>
    <navCustom
        icon="redo-filled"
        nav="bottom"></navCustom>
    <scroll-view
        class="scroll"
        scroll-y
        :scroll-top="scrollTop">
        <view class="lyric">
            <view
                v-if="lyricList.length > 0"
                class="lyric"
                ref="lyr">
                <text
                    v-for="lyric in lyricList"
                    :key="lyric"
                    class="space"
                    >{{ lyric.lyric }}</text
                ></view
            >
            <view v-else>暂无数据</view>
        </view>
    </scroll-view>
    <view class="bottom">
        <view class="icon">
            <template
                v-for="(icon, index) in 4"
                :key="index"
                ><svgIcon :icon="icons[index]"></svgIcon
            ></template>
        </view>
        <view class="slider">
            <slider
                :value="$audioStore.currentTime"
                :max="$audioStore.maxTime"
                :block-size="10"
                @change="sliderChange" />
        </view>
        <view class="button">
            <template
                v-for="(btn, index) in btns"
                :key="index"
                ><svgIcon
                    :icon="btns[index]"
                    @play="playAndPause"
                    v-if="btns[index] !== btns[changeIndex]"></svgIcon
            ></template>
        </view>
    </view>
</template>

<script lang="ts" setup>
    import { onShow } from "@dcloudio/uni-app"
    import { onMounted, ref, watch } from "vue"
    import { audioStore } from "@/store/modules/audio"
    import { songsStore } from "@/store/modules/songs"
    const icons = ["icon-xihuan", "icon-xiazai", "icon-pinglun", "icon-gengduo1"]
    const btns = ["icon-liebiaoxunhuan", "icon-shangyishou", "icon-kaishi", "icon-zanting1", "icon-xiayishou", "icon-bofangduilie"]
    const $audioStore = audioStore()
    const $songsStore = songsStore()
    //滚动容器实例
    const lyr = ref()
    //滚动距离
    let scrollTop = ref<number>(0)
    //歌词列表
    let lyricList = ref<any>([])
    // const getLyricData = async () => {
    //     let res = await getLyric(1)
    //     // console.log(res);
    //     const arr = res.lrc.lyric.split(/[\n]/)
    //     const arrFilter = arr.filter((e: any) => e.length > 0)
    //     // console.log(arrFilter);

    //     arrFilter.forEach((e: any) => {
    //         let temp = e.split(/\[(.+?)\]/)
    //         let seconds = format(temp[1])
    //         // console.log(temp)
    //         // console.log(seconds)
    //         lyricList.value.push({
    //             Time: seconds,
    //             lyric: temp[2],
    //         })
    //     })
    // }
    //

    const getLyricList = async () => {
        if (!$songsStore.songId) {
            return uni.showToast({ title: "没有歌曲", icon: "none" })
        }
        await $songsStore.getLyricData()
        lyricList.value = $songsStore.lyricList
    }
    /* 播放进度更新 */
    let index = 0
    watch(
        () => $audioStore.currentTime,
        () => {
            if (index === 0) {
                lyr.value?.$el.children[0].classList.add("color")
            }
            if ($audioStore.currentTime >= lyricList.value[index + 1]?.Time) {
                lyr.value?.$el.children[index]?.classList.remove("color")
                index++
                lyr.value?.$el.children[index]?.classList.add("color")

                if (index > 6) {
                    scrollTop.value = 40 * (index - 6)
                }
                if (index === lyr.value?.$el.children.length-1) {
                    changeIndex.value = 3
                    index=0
                    console.log('結束了' ,changeIndex.value);
                    
                }
            }
        }
    )

    /*   播放与暂停 */
    const changeIndex = ref<number>(2)
    const playAndPause = () => {
        console.log('kkkk');
        console.log(changeIndex.value);
        
        // $audioStore.isPlayState ? changeIndex.value++ : changeIndex.value--
        changeIndex.value>2?changeIndex.value--:changeIndex.value++
        $audioStore.playAndPause()
    }
    /* 移动播放时间 */
    const sliderChange = (e: any) => {
        console.log(e)
        $audioStore.movePlayTime(e.detail.value)
    }

    onShow(async () => {
        lyricList.value = []
        await getLyricList()
    })

    onMounted(() => {})
</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
    }
    .nav {
        height: $uni-nav-top;
        width: 100%;
        background-color: red;
    }
    .scroll {
        height: calc(100vh - $uni-double-bottom - $uni-double-top);
        width: 100%;
        .lyric {
            // height: 100%;
            width: 100%;
            overflow: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        .space {
            line-height: 40px;
            height: 40px;
            display: block;
        }
        .color {
            color: red;
        }
    }
    .bottom {
        height: calc($uni-double-bottom + $uni-nav-top);
        // background-color: yellow;
        .icon {
            display: flex;
            height: $uni-nav-top;
            align-items: center;
            justify-content: space-around;
        }
    }
    .button {
        display: flex;
        height: $uni-nav-bottom;
        align-items: center;
        justify-content: space-around;
    }
</style>
