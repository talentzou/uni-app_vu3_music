<template>
    <view class="viewport">
        <navigation icon="plusempty"></navigation>
        <view class="nav">
            <text
                :class="{ active: activeIndex === 0 }"
                @tap="changeTag"
                >推荐</text
            >
            <text
                :class="{ active: activeIndex === 1 }"
                @tap="changeTag"
                >MV</text
            >
        </view>
        <swiper
            class="swiper"
            @change="activeClass">
            <swiper-item>
                <Play></Play>
                <view v-show="activeIndex === 0">视频接口已失效。。。。。。</view>

                <!-- <audio ></audio> -->
                <!-- <scroll-view
                    scroll-y
                    class="swiper-scroll"
                    v-show="isTrue">
                    <uni-card
                        v-for="item in 4"
                        :key="item"
                        class="card"
                        padding="0"
                        margin="10px 5px"
                        spacing="0">
                        <view class="person">
                            <image
                                class="avatar"
                                lazy-load></image>
                            <text class="nickname">mingchen</text>
                        </view>
                        <video
                            src=""
                            class="video"></video>
                        <view class="introduce">
                            <text>33333</text>
                            <text>44444</text>
                        </view>
                    </uni-card>
                </scroll-view> -->
                <scroll-view
                    class="swiper-scroll"
                    scroll-y
                    v-show="!isTrue">
                    <view class="column">
                        <uni-card
                            margin="5px 0"
                            spacing="0"
                            padding="0"
                            v-for="(mv, index) in mvResData"
                            :key="index"
                            class="uni-card">
                            <image
                                :src="mv.cover"
                                class="mvImage"
                                lazy-load></image>
                            <view class="mv-name">{{ mv.name }}</view>
                            <view
                                ><image
                                    class="artistImage"
                                    lazy-load></image
                                ><text
                                    v-for="artist in mv.artists"
                                    :key="artist.id"
                                    >{{ artist.name }}</text
                                ></view
                            >
                        </uni-card>
                    </view>
                </scroll-view>
            </swiper-item>
            <swiper-item
                class="swiper-item"
                v-show="activeIndex === 1">
                <scroll-view
                    class="swiper-scroll"
                    scroll-y>
                    <view class="column">
                        <uni-card
                            margin="5px 0"
                            spacing="0"
                            padding="0"
                            v-for="(mv, index) in mvResData"
                            :key="index"
                            class="uni-card">
                            <image
                                :src="mv.cover"
                                class="mvImage"
                                lazy-load></image>
                            <view class="mv-name">{{ mv.name }}</view>
                            <view
                                ><image
                                    class="artistImage"
                                    lazy-load></image
                                ><text
                                    v-for="artist in mv.artists"
                                    :key="artist.id"
                                    >{{ artist.name }}</text
                                ></view
                            >
                        </uni-card>
                    </view>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script lang="ts" setup>
    import navigation from "@/components/navCustom/navCustom.vue"
    import { onMounted, ref, reactive } from "vue"
    import { getMvResponseData } from "@/server/video"
    import type { mvData } from "@/types/video"
    let mvResData = reactive<mvData[]>([])
    const videoData = async () => {
        let { data } = await getMvResponseData()
        mvResData = data as mvData[]
        console.log(data)
    }
    111
    const activeIndex = ref<number>(0)
    const activeClass = (e: any) => {
        console.log(e)
        activeIndex.value = e.detail.current
    }
    const isTrue = ref<boolean>(true)
    const changeTag = () => {
        isTrue.value = !isTrue.value
        if (activeIndex.value) activeIndex.value = 0
        else {
            activeIndex.value = 1
        }
        console.log(activeIndex.value)
    }
    onMounted(() => {
        videoData()
    })
</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .viewport {
        display: flex;
        flex-direction: column;
        .nav {
            height: var(--window-top);
            padding: 5px;
            font-size: 20px;
            font-weight: 600;
            line-height: 2;
            height: 40px;
            text {
                box-sizing: border-box;
                padding: 0 10px;
                border-radius: 10px;
            }
            .active {
                background-color: greenyellow;
            }
        }
    }

    .swiper {
        width: 100%;
        height: calc(100vh - var(--window-top) - var(--window-top) - var(--window-bottom));
        transform: translate3d(0, 0, 0);
        .swiper-scroll {
            height: 100%;
            width: 100%;
            padding: 0 5px;
            box-sizing: border-box;
            transform: translate3d(0, 0, 0);
        }
    }
    .card {
        display: flex;
        flex-direction: column;
        padding: 0;
        border-radius: 10px;
        .person {
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: 10px;
            .avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 20px;
                border: 1px solid black;
            }
        }
        .video {
            width: 100%;
            height: 180px;
        }
    }

    .column {
        column-count: 2;
        .uni-card {
            margin: 5px 0;
            border-radius: 10px;
        }
        .mvImage {
            width: 100%;
            height: 100px;
        }
        .artistImage {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .mv-name {
            text-overflow: ellipsis;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
        }
    }
</style>
