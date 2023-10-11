<template>
    <uni-nav-bar
        :border="false"
        fixed>
        <view v-if="props.icon === 'search'">
            <input
                confirm-type="search"
                class="nav-bar-input"
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

<style scoped></style>
