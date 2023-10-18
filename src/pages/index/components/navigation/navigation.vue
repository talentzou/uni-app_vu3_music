<template>
    <view class="viewport">
        <scroll-view
            scroll-x
            show-scrollbar>
            <view class="scroll">
                <view
                    v-for="(item,index) in tabbar"
                    :key="item.name"
                    class="tabbar">
                    <navigator
                        :url="`/pages/${navs[index]}`"
                        class="flex-item">
                        <view>
                            <image
                                class="tabbar-image"
                                :src="item.iconUrl"
                                mode="aspectFit">
                            </image
                        ></view>
                        <view>
                            <text>{{ item.name }}</text></view
                        ></navigator
                    >
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import { homepage } from "@/server/home"
    import type { tabbarData } from "@/types/home"
    const navs = ["dailyRec/dailyRec", "personalFm/personalFm", "songlist/songlist", "top/top", "voiceBook/voiceBook","album/album"]
    //发现导航条
    const tabbar = ref<tabbarData[]>([])
    onMounted(async () => {
        let res = await homepage()
        // console.log("homepage", res);
        tabbar.value = res.data
    })
</script>

<style scoped lang="scss">
    .viewport {
        width: 100%;
    }
    .scroll {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .tabbar {
        padding: 15px;
        font-size: 10px;
    }

    .tabbar-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgb(178, 93, 93);
    }
</style>
