<template>
    <view
        class="message"
        :style="{ backgroundImage: `url(${songListDetailRes?.coverImgUrl})` }">
        <view class="filter">
            <view class="row">
                <!-- 歌单图片 -->
                <view>
                    <image
                        class="surface"
                        :src="songListDetailRes?.coverImgUrl"
                        mode="aspectFit">
                    </image
                ></view>

                <!-- 歌单信息 -->
                <view>
                    <text class="title">{{ songListDetailRes?.name }}</text>
                    <view class="creator">
                        <image
                            class="avatar"
                            :src="songListDetailRes?.creator.avatarUrl"></image>
                        <text class="nickname">{{ songListDetailRes?.creator.nickname }}</text>
                    </view>
                    <view
                        ><uni-tag
                            :text="text"
                            v-for="text in songListDetailRes?.tags"
                            :key="text"></uni-tag
                    ></view>
                </view>
            </view>
            <view class="text">{{ songListDetailRes?.description }}</view>
            <!-- 分类标签 -->
            <view class="icons"
                ><view
                    v-for="item in icons"
                    :key="item"
                    class="icon"
                    ><svgIcon :icon="item"></svgIcon
                ></view>
            </view>
        </view>
    </view>
    <scroll-view
        scroll-y
        class="scroll-view"
        v-if="songsList">
        <view
            v-for="(songs, index) in songsList"
            :key="index"
            class="list"
            @tap="$audioStore.initMusic(songs.id)">
            <text style="width: 25px; text-align: center">{{ index + 1 }}</text>
            <view class="songs">
                <text class="song-name">{{ songs.name }}</text>
                <view>
                    <text
                        class="artist"
                        v-for="ar in songs.ar"
                        :key="ar"
                        >{{ ar.name }}</text
                    ></view
                >
            </view>
            <svgIcon
                icon="icon-gengduo"
                class="more"></svgIcon
        ></view>
    </scroll-view>
    <Play></Play>
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    import { getPlaylistDetail, getPlaylistTrackAll } from "@/server/home"
    import { audioStore } from "@/store/modules/audio";
    import { onLoad } from "@dcloudio/uni-app"
    const icons = ["icon-huiyuanzhuanxiang", "icon-pinglun", "icon-shoucang"]
    const $audioStore=audioStore()
    const props = defineProps<{ id: string }>()

    //歌单信息
    let songListDetailRes = ref<any>()
    //歌单列表
    let songsList = ref<any>([])
    const resData = async () => {
        let { playlist } = await getPlaylistDetail(props.id)
        let { songs } = await getPlaylistTrackAll(props.id)
        songListDetailRes.value = playlist
        // console.log(songListDetailRes)
        songsList.value = songs
        // console.log('songs',res)
    }
   //页面加载，获取路由参数
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onLoad((options:any) => {
        resData()
        // console.log('5555',options);
    })
</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
        padding: 0 5px;
    }
    .message {
        width: 100%;
        height: 230px;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        background-repeat: no-repeat;
        object-fit: cover;
        background-size: 100%;
        .filter {
            height: 100%;
            width: 100%;
            position: absolute;
            //  backdrop-filter: grayscale(100%);
            backdrop-filter: blur(100px);
        }
        .row {
            display: flex;
            padding: 10px 0;
        }
        .surface {
            width: 100px;
            height: 100px;
            padding: 0 10px;
            border-radius: 10px;
            margin-right: 10px;
        }
        .title {
            font-size: 20px;
            color: rgb(236, 227, 227);
        }
        .creator {
            padding: 10px 0;
            display: flex;
            align-items: center;
            .avatar {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 5px;
            }
            .nickname {
                color: white;
            }
        }
        .text {
            display: -webkit-box;
            line-height: 30px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; // 最多显示两行
            overflow: hidden;
            width: 100%;
            padding: 0 10px;
            text-overflow: ellipsis; // 超出内容显示省略号
            color: white;
            font-size: 10px;
        }
        .icons {
            display: flex;
            flex-direction: row;
            padding: 10px 0;
            justify-content: space-around;
            .icon {
                width: 100px;
                background-color: #fff;
                text-align: center;
                border-radius: 10px;
            }
        }
    }

    .scroll-view {
        // height: calc(100vh - var(--window-top) - var(--window-bottom) - 230px);
        height: calc(100vh - $uni-nav-top - $uni-nav-bottom - 230px);
        .list {
            display: flex;
            align-items: center;
            position: relative;
            height: $uni-nav-bottom;
            .more {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .songs {
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                .song-name {
                    display: -webkit-box;
                    font-size: 20px;
                    font-weight: 800px;
                    // text-overflow: ellipsis;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    white-space: nowrap;
                    width: 200px;
                }
                .artist {
                    font-size: 10px;
                    margin-right: 5px;
                    color: rgb(175, 164, 164);
                }
            }
        }
    }
</style>
