<template>
    <view class="viewport-playlist">
        <text class="playlist" >{{title==="radar"?"雷达歌单":"推荐歌单" }}</text>
        <scroll-view scroll-x="true" class="scroll-view" show-scrollbar="true">
            <view v-for="item in props.list" :key="item" class="item">
                <image class="image" :src="item.uiElement.image?.imageUrl||item!.resources[0].uiElement.image?.imageUrl" lazy-load></image>
                <view
                    ><text class="text-description">{{ item.uiElement.mainTitle.title||item.resources[0].uiElement.mainTitle.title }}</text></view
                >
            </view>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
   import type {resources} from "@/types/home"
    const props = defineProps<{ list: resources,title:string}>()
    
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
            line-height: 20px;
            width: 100px;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
    }
</style>
