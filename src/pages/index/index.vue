<template>
    <view class="viewport">
        <navCustom icon="mic-filled"></navCustom>
        <scroll-view scroll-y class="scroll-view">
            <!-- 主页轮播图 -->
            <banner />
            <!-- 主页发现导航 -->
            <navigation></navigation>
            <!-- 主页推荐歌单 -->
            <playListComp :list="playlists" title="list"></playListComp>
            <!-- 主页个性推荐 -->
            <personalComp :list="personalList" title="personal"  :isPlay="true"></personalComp>
            <!-- 雷达歌单 -->
            <radarSongComp :list="radarSongList" title="radar"></radarSongComp>
            <!-- 主页·排行榜 -->
            <topListComp :data="topList" v-if="topList"></topListComp>
              <!-- 主页推荐新歌 -->
            <newSongComp :list="newSongList" title="newSong" v-if="newSongList" :isPlay="false"></newSongComp>
        </scroll-view>
        <Play></Play>
    </view>
</template>

<script setup lang="ts">
    // import search from "./components/search/search.vue"
    import banner from "@/components/banner/banner.vue"
    import navigation from "./components/navigation/navigation.vue"
    import playListComp from "./components/playlist/playlist.vue"
    import radarSongComp from "./components/playlist/playlist.vue"
    import newSongComp from "./components/podcast/podcast.vue"
    import personalComp from "./components/podcast/podcast.vue"
    import {  getHomepage } from "@/server/home"
    import topListComp from "./components/topList/toplist.vue"
    import { ref, onMounted } from "vue"
    import type {resources } from "@/types/home"
    // 推荐歌单
    const playlists = ref< resources>({})
    //排行榜
    const topList = ref<resources>({})
    //个性推荐
    const personalList = ref<resources>({})
    //雷达歌单
    const radarSongList = ref<resources>({})
    //新歌推荐
    const newSongList = ref<resources>({})
    onMounted(async () => {
        let { code, data } = await getHomepage()
        if (code === 200) {
            playlists.value = data.blocks[1].creatives
            console.log(  playlists.value );
            
            personalList.value = data.blocks[2].creatives
            if (data.blocks.length > 4) {
                topList.value = data.blocks[3].creatives
                radarSongList.value = data.blocks[4].creatives
                newSongList.value = data.blocks[5].creatives
            } else {
                radarSongList.value = data.blocks[3].creatives
            }
        }
        
    })
</script>

<style scoped lang="scss">
    page {
        background-color: #f7f7f7;
        height: 100%;
        width: 100%;
        // padding: 0 10px;
        // // --window-top: 44px;
    }

    .scroll-view {
        // height: calc(100vh - var(--window-bottom) - var(--window-top)  - var(--window-bottom));
        height: calc(100vh - $uni-double-bottom - $uni-nav-top);
        // padding-bottom: var(--window-bottom);
    }
</style>
