<template>
    <view>
        <navCustom
            icon="search"
            ref="nav"
            @get="searchResult"></navCustom>
        <scroll-view
            scroll-y
            class="scroll"
            v-if="isView">
            <view class="container">
                <text
                    class="songs"
                    v-for="text in searchHot"
                    :key="text"
                    @tap="tapKeywords(text.first)"
                    >{{ text.first }}</text
                >
            </view>
        </scroll-view>
        <scroll-view
            v-else
            scroll-y
            class="scroll">
            <view class="container">
                <view
                    v-for="item in resultData"
                    :key="item"
                    class="list"
                    @tap="playSongs(item.id)"
                    ><text>{{ item.name }}</text>
                    <view class="artist"
                        ><text
                            v-for="ar in item.ar"
                            :key="ar.id"
                            style="margin-right: 5px"
                            >{{ ar.name }}</text
                        ></view
                    ></view
                >
            </view></scroll-view
        >
        <Play ref="play"></Play>
    </view>
</template>

<script lang="ts" setup>
    import { onLoad } from "@dcloudio/uni-app"
    import { getSearchHotDetail, } from "@/server/search"
    import { ref, } from "vue"
    import { songsStore } from "@/store/modules/songs"
    const $songStoreData = songsStore()
    const isView = ref<boolean>(true)
    //熱搜數據
    const searchHot = ref()
    const getSearchHotData = async () => {
        let res = await getSearchHotDetail()
        searchHot.value = res.result.hots
    }
    //搜索数据
    const resultData = ref<any>()
    const searchResult = (data: any) => {
        isView.value = !isView.value
        // console.log("hahaha", data)
        resultData.value = data
    }
    //获取nav实例
    const nav = ref()
    const tapKeywords = (text: string) => {
        nav.value.searchKeyword = text
        console.log(nav.value.searchKeyword)
    }
    //播放歌曲
    const play = ref()
    const playSongs = async (songId: string | number) => {
        $songStoreData.songId = songId
        await $songStoreData.getSongDetailData()
        await $songStoreData.getSongUrlData()
        // console.log("6666666", play)
        // console.log("999999", play.value.isShow)
        play.value.playMusic()
    }
    onLoad(async () => {
        await getSearchHotData()
    })

</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
    }
    .scroll {
        height: calc(100vh - $uni-nav-bottom - $uni-nav-bottom);
        // height: 100%;
        width: 100%;
    }
    .container {
        height: 100%;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        .songs {
            margin: 10px;
            border-radius: 10px;
            border: 1px solid black;
            background-color: rgb(92, 96, 93);
            padding: 5px;
            display: inline-block;
        }
        .list {
            border-bottom: 1px solid burlywood;
            height: 60px;
        }
        .artist {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            margin-top: 10px;
        }
    }

    // .scroll-top {
    //     width: 100%;
    //     height: 500px;
    //     .top {
    //         display: flex;
    //         height: 100%;
    //     }
    //     .swiper {
    //         background-color: rgb(82, 82, 73);
    //         width: 250px;
    //         height: 100%;
    //         margin-right: 20px;
    //         border-radius: 10px;
    //     }
    // }
</style>
