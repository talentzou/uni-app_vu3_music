<template>
    <view style="padding: 5px">
        <svg
            class="icon"
            aria-hidden="true">
            <use :xlink:href="prefix+icon"></use>
        </svg>
    </view>
</template>

<script setup lang="ts">
    defineProps({
        prefix: {
            type: String,
            default: "#",
        },
        icon: {
            type: String,
            default: "",
        },
    })
</script>

<style scoped lang="scss">
    .icon {
        width: 30px;
        height: 30px;
    }
</style>
