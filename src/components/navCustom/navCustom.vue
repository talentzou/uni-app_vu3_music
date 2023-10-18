<template>
    <uni-nav-bar
        :border="false"
        fixed>
        <view class="search">
            <input
                confirm-type="search"
                class="input"
                type="text"
                placeholder="输入搜索关键词"
                @tap="search"
                v-if="icon === `mic-filled`" />
            <input
                confirm-type="search"
                class="input"
                type="text"
                v-model.trim="searchKeyword"
                placeholder="输入搜索关键词"
                v-else />
        </view>
        <template #left>
            <uni-icons
                type="bars"
                size="30"
                color="#999"
                @tap="openDrawer" />
        </template>
        <template #right>
            <uni-icons
                :type="icon"
                size="30"
                color="#999"
                @click="getSearchData" />
        </template>
    </uni-nav-bar>
    <drawer ref="uniDrawer"></drawer>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import drawer from "@/components/drawer/drawer.vue"
    import { getSearchMultiMatch } from "@/server/search"
    // import { onLoad } from "@dcloudio/uni-app"
    defineProps<{ icon: string }>()
    const $emit = defineEmits<{ (e: "get", data: []): void }>()
    //搜索关键字
    const searchKeyword = ref<any>("")
    const getSearchData = async () => {
        if (searchKeyword.value === "") {
            uni.showToast({ title: "请不要输入为空", icon: "none" })
            return
        }
        console.log(searchKeyword.value)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let { code, result } = await getSearchMultiMatch(searchKeyword.value)
        $emit("get", result.songs)
    }

    // onLoad(async () => {
    //     await getSearchHotDetailData()
    // })
    onMounted(() => {})
    const uniDrawer = ref()
    const openDrawer = () => {
        console.log(uniDrawer)
        uniDrawer.value.open()
    }
    const search = () => {
        uni.navigateTo({ url: "/pages/search/search" })
    }
    //暴露搜索方法
    defineExpose({ getSearchData, searchKeyword  })
</script>

<style scoped lang="scss">
    .search {
        height: $uni-nav-top;
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        .input {
            border: 1px solid rgb(127, 122, 122);
            padding: 5px;
            border-radius: 15px;
        }
    }
</style>
