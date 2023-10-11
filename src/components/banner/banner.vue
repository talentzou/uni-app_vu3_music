<template>
    <view class="viewport">
        <swiper @change="currentChange" class="swiper">
            <swiper-item v-for="(item, index) in imgList" :key="index" class="swiperItem">
                <image :src="item.imageUrl" mode="aspectFit" class="image" lazy-load> </image>
            </swiper-item>
        </swiper>
        <view class="indicator">
            <text class="dot" v-for="(item, index) in DotS" :key="item" :class="{ active: index === activeIndex }"></text>
        </view>
    </view>
</template>

<script lang="ts" setup>
    import { onMounted } from "vue"
    import { getBannerRes } from "@/server/home"
    import { ref } from "vue"
    type banner = {
        imageUrl: string
        [string: string]: any
    }
    //激活样式
    const activeIndex = ref<number>(0)
    //圆点数量
    const DotS = ref<number>(0)
    const imgList = ref<banner>({
    imageUrl: ""
})
    //
    const currentChange = (event: any) => {
        console.log(event)
        activeIndex.value = event.detail.current
    }
    onMounted(async () => {
        let res = await getBannerRes()
        // console.log("banner ", res)
        imgList.value= res.banners 
        DotS.value = imgList.value.length
    })
</script>

<style scoped lang="scss">
    .viewport {
        position: relative;
        width: 100%;
        height: 150px;
        .indicator {
            position: absolute;
            left: 20px;
            bottom: 20px;
            display: flex;
            .dot {
                width: 5px;
                height: 5px;
                margin: 0 5px;
                background-color: #857d7d;
                border-radius: 50%;
            }
            .active {
                background-color: #fff;
                transform: scale(2, 2);
            }
        }
    }

    .image {
        width: 100%;
        height: 140px;
        border-radius: 10px;
    }
</style>
