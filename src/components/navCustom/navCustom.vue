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
                style="width: 100%;"
                v-if="props.icon === `mic-filled`" />
            <input
                confirm-type="search"
                class="input"
                type="text"
                style="width: 100%;"
                v-model.trim="searchKeyword"
                placeholder="输入搜索关键词"
                v-if="props.nav==='arrow-left'" />
        </view>
        <template #left>
            <uni-icons
                :type="nav"
                size="30"
                color="#999"
                @tap="openDrawerOrBack" />
        </template>
        <template #right>
            <uni-icons
                :type="props.icon"
                size="30"
                color="#999"
                v-if="props.icon"
                 />
          <text @tap="getSearchData" class="search-result" v-if="!props.icon">搜索</text>
        </template>
    </uni-nav-bar>
    <drawer ref="uniDrawer"></drawer>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import drawer from "@/components/drawer/drawer.vue"
    import { getSearchMultiMatch } from "@/server/search"
    // import { onLoad } from "@dcloudio/uni-app"
   const props=defineProps<{ nav:string, icon: string }>()

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
        // let res = await getSearchMultiMatch(searchKeyword.value)
        // console.log('1111',res);
        
        $emit("get", result!.songs)
    }

    // onLoad(async () => {
    //     await getSearchHotDetailData()
    // })
    onMounted(() => {})
    const uniDrawer = ref()
    const openDrawerOrBack = () => {
        if(props.nav!=='bars') return uni.switchTab({url:'/pages/index/index'})
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
        align-items: center;
        box-sizing: border-box;
        .input {
            border: 1px solid rgb(127, 122, 122);
            padding: 5px;
            border-radius: 15px;
        }
    }
    .search-result {
        font-size: 25px;
        font-weight: 700;
        padding: 5px;
    }
</style>
