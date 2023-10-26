<template>
    <view style="padding: 5px">
        <svg
            class="icon"
            :style="{ width: `${props.width}px`, height: `${props.height}px` }"
            aria-hidden="true"
            @tap="btnFunction">
            <use :xlink:href="props.prefix + props.icon"></use>
        </svg>
    </view>
</template>

<script setup lang="ts">
    const props = defineProps({
        prefix: {
            type: String,
            default: "#",
        },
        icon: {
            type: String,
            default: "",
        },
        width: {
            type: Number,
            default: 30,
        },
        height: {
            type: Number,
            default: 30,
        },
        isPlay: {
            type: Boolean,
            default: false,
        },
    })
    const $emits = defineEmits<{ (e: "play"): void }>()
    const btnFunction = () => {
        if (props.icon === "icon-kaishi" || props.icon === "icon-zanting1") {
            $emits("play")
        }
    }
</script>

<style scoped lang="scss"></style>
