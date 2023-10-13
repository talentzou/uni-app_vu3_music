<template>
    <view class="viewport">
        <text class="playlist">{{ title === "personal" ? "个性推荐" : "推荐新音乐/新数字专辑" }}</text>
        <swiper class="swiper">
             <!-- eslint-disable-next-line vue/no-unused-vars -->
            <swiper-item v-for="(swiper, index) in props.list" :key="swiper">
                <view class="item" v-for="item in swiper.resources" :key="item.resourceId">
                    <image class="songs-image" :src="item.uiElement.image.imageUrl" lazy-load></image>
                    <view>
                        <text class="song-name">{{ item.resourceExtInfo.songData?.name||item.uiElement.mainTitle.title }}</text>
                        <view class="message">
                            <text class="alias">{{ item.uiElement.subTitle?.title }}</text>
                            <text class="artists" v-if="item.resourceExtInfo.songData">{{ item.resourceExtInfo.songData?.artists[0].name }}</text>
                            <text class="artists" v-for="author in item.resourceExtInfo.artists" :key="author.id" v-else>{{ author.name }}  </text>
                        </view>
                    </view>
                    <!-- <text class="btn-play" v-if="isPlay">播放</text> -->
                    <svgIcon class="btn-play" v-if="isPlay" icon="icon-zanting"></svgIcon>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script setup lang="ts">
    //import { ref, onMounted, computed } from "vue"
    import type {resources} from "@/types/home"
    const props = defineProps<{ list:resources; title: string; isPlay: boolean }>()
</script>
<style scoped lang="scss">
    .viewport {
        width: 100%;
        overflow: scroll;
        .playlist {
            font-size: 25px;
            font-weight: 600;
        }
        .swiper {
            height: 220px;
        }
    }
    .item {
        margin-top: 10px;
        display: flex;
        position: relative;
        align-items: center;
        .songs-image {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            margin-right: 10px;
        }
        .message {
            font-size: 5px;
            margin-right: 10px;
            margin-top: 10px;
            width: 100%;
            display: flex;
            // .artists {
            //     margin-right:2px;
            // }
            .alias {
                display: -webkit-box;
                margin-right: 20px;
                // white-space:nowrap;
                -webkit-line-clamp: 1;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-box-orient: vertical;
            }
        }
        .btn-play {
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
</style>
