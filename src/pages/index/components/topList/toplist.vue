<template>
    <view class="viewport">
        <text class="playlist">排行榜</text>
        <swiper class="swiper">
            <swiper-item v-for="(item, index) in props.data" :key="index">
                <uni-card spacing="0" padding="0">
                    <!-- 排行榜标题 -->
                    <text class="mainTitle">{{ item.uiElement.mainTitle?.title }}</text>
                    <view v-for="(list, sum) in item.resources" :key="sum">
                        <!-- 排行榜列表 -->
                        <view class="item">
                            <image class="image" :src="list.uiElement.image?.imageUrl" lazy-load></image>
                            <text class="">{{ sum + 1 }}</text>
                            <view>
                                <text>{{ list.uiElement.mainTitle.title }}</text>
                                <text v-if="list.resourceExtInfo">{{ list.resourceExtInfo.songData?.artists[0].name }}</text>
                            </view>
                            <text class="labelText">
                                {{ list.uiElement.labelText.text }}
                            </text>
                        </view>
                    </view>
                </uni-card>
            </swiper-item>
        </swiper>
    </view>
</template>

<script setup lang="ts">
    import type { resources } from "@/types/home"
    const props = defineProps<{ data: resources }>()
</script>

<style scoped lang="scss">
    .viewport {
        width: 100%;
        .playlist {
            font-size: 25px;
            font-weight: 600;
        }
    }
    .swiper {
        min-height:280px;
    }
    .mainTitle {
        font-size: 25px;
        font-weight: 600;
    }
    .item {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 15px 0;
        align-items: center;
        position: relative;
        image {
            width: 50px;
            height: 50px;
            margin-right: 15px;
        }
        text {
            display: block;
            padding: 0 5px;
            margin-right: 15px;
        }
        .labelText {
            color: red;
            position: absolute;
            right: 5px;
        }
    }
</style>
