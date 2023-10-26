<template>
    <scroll-view
        scroll-y
        class="scroll">
        <view class="flex">
            <template
                v-for="list in officialTopList"
                :key="list">
                <navigator
                :url="`/pages/songListDetail/songListDetail?id=${list.id}`"
                    open-type="navigate">
                    <image
                        :src="list.coverImgUrl"
                        class="img"
                        lazy-load></image>
                </navigator>
            </template>
        </view>
    </scroll-view>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from "vue"
    import { getTopListDetail } from "@/server/topList"
    let officialTopList = ref<any>([])
    onMounted(async () => {
        let { list } = await getTopListDetail()
        console.log(list)
        officialTopList.value = list
        console.log(officialTopList.value)
    })
</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
        padding: 0 5px;
    }
    .scroll {
        height: 100%;

        justify-content: space-around;
    }
    .flex {
        display: flex;
        flex-wrap: wrap;
    }
    .img {
        width: 100px;
        height: 100px;
        margin: 10px;
        border-radius: 10px;
    }
</style>
