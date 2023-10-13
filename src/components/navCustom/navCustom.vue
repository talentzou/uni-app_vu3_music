<template>
    <uni-nav-bar
        :border="false"
        fixed>
        <view class="search" v-if="props.icon===`mic-filled`">
                <input
                    confirm-type="search"
                    class="input"
                    type="text"
                    placeholder="输入搜索关键词"
            /></view>
        <template #left>
            <uni-icons
                type="bars"
                size="30"
                color="#999"
                @tap="openDrawer" />
        </template>
        <template #right>
            <uni-icons
                :type="props.icon"
                size="30"
                color="#999" />
        </template>
    </uni-nav-bar>
    <drawer ref="uniDrawer"></drawer>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import drawer from "@/components/drawer/drawer.vue"
    const props = defineProps<{ icon: string }>()
    onMounted(() => {})
    const uniDrawer = ref()
    const openDrawer = () => {
        console.log(uniDrawer)
        uniDrawer.value.open()
    }
</script>

<style scoped lang="scss">
    .search {
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
