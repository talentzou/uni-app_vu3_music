<template>
    <view class="view">
        <view
            class="navigator"
            @tap="toLyric">
            <view
                ><image
                    src="@/assets/login.jpg"
                    class="image"></image
            ></view>
            <view class="play"
                ><text class="songName">{{ $songStoreData.songName ? $songStoreData.songName : "暂时无数据" }}</text>
                <view class="artists">
                    <template
                        v-for="ar in $songStoreData.artists"
                        :key="ar.id">
                        <text>{{ ar.name }}</text></template
                    >
                </view>
            </view>
        </view>
        <view @tap="playBtn"
            ><svgIcon
                icon="icon-zanting"
                v-if="$audioStore.isPlayState"></svgIcon>
            <svgIcon
                icon="icon-bofangzhong"
                v-else></svgIcon>
        </view>
        <svgIcon icon="icon-bofangliebiao"></svgIcon>
    </view>
</template>

<script setup lang="ts">
    import { watch } from "vue"
    import { songsStore } from "@/store/modules/songs"
    import { audioStore } from "@/store/modules/audio"
    const $songStoreData = songsStore()
    const $audioStore = audioStore()
    //播放音乐icon·
    const playBtn = async () => {
        $audioStore.playAndPause()
    }
    //跳转歌词页面
    const toLyric = () => {
        uni.navigateTo({
            url: `/pages/lyric/lyric`,
        })
    }
    //监听歌曲id变化
    watch(
        () => $songStoreData.songId,
        (newVal, oldVal) => {
            $audioStore.destroyInstance()
            $songStoreData.getLyricData()
            console.log(newVal, oldVal)
        }
    )

</script>

<style scoped lang="scss">
    .view {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 10px;
        height: $uni-nav-bottom;
        overflow: hidden;
    }
    .navigator {
        display: flex;
        align-items: center;
        width: 280px;
    }
    .image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .play {
        padding-left: 5px;
        .songName {
            width: 235px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
        }
    }
    .artists {
        width: 235px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
