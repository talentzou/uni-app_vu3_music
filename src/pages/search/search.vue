<template>
    <view>
        <navCustom
            icon=""
            nav="arrow-left"
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
                    @tap=" $audioStore.initMusic(item.id)"
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
 // play.playMusic(item.id)
    import { onLoad } from "@dcloudio/uni-app"
    import { getSearchHotDetail } from "@/server/search"
    import { ref } from "vue"
    import { audioStore } from "@/store/modules/audio"
    const $audioStore=audioStore()
    const isView = ref<boolean>(true)
    //播放组件实例
    const play = ref()
    //熱搜列表
    const searchHot = ref()
    const getSearchHotData = async () => {
        let { result } = await getSearchHotDetail()
        // let res = await getSearchHotDetail()
        searchHot.value = result!.hots
        // console.log('2222',res);
        
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
        // console.log(nav.value.searchKeyword)
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

   
</style>
