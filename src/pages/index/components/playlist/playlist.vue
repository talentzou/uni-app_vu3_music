<template>
    <view class="viewport-playlist">
        <text class="playlist">{{ title === "radar" ? "雷达歌单" : "推荐歌单" }}</text>
        <scroll-view
            scroll-x="true"
            class="scroll-view"
            show-scrollbar="true">
            <view
                v-for="item in props.list"
                :key="item"
                class="item">
                <navigator
                    class=""
                    target=""
                    url="/pages/songListDetail/songListDetail"
                    hover-class="navigator-hover"
                    open-type="navigate">
                    <image
                        class="image"
                        :src="item.uiElement.image?.imageUrl||item!.resources[0].uiElement.image?.imageUrl"
                        lazy-load></image>
                    <view
                        ><text class="text-description">{{ item.uiElement.mainTitle.title || item.resources[0].uiElement.mainTitle.title }}</text></view
                    >
                </navigator>
            </view>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
    import type { resources } from "@/types/home"
    const props = defineProps<{ list: resources; title: string }>()
</script>

<style scoped lang="scss">
    .playlist {
        font-size: 25px;
        font-weight: 600;
    }
    .scroll-view {
        white-space: nowrap;
        height: 150px;
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
    .item {
        margin-left: 15px;
        width: 100px;
        height: 100%;
        display: inline-block;
        .image {
            width: 100px;
            height: 100px;
            border-radius: 10px;
        }
        .text-description {
            text-overflow: ellipsis;
            font-size: 10px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            height: 96px;
            line-height: 20px;
            width: 100px;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
    }
</style>
