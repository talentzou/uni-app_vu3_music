<template>
    <view class="viewport">
        <navigation icon="search"></navigation>
        <scroll-view class="scroll-view">
            <navigator
                url="/pages/login/login"
                hover-class="navigator-hover"
                open-type="navigate">
                <image
                    class="avatar"
                    src="@/static/icon/user-check.png"></image>
                <uni-card
                    @click=""
                    class="card">
                    <view class="name"><text>名字</text></view>
                    <view><text>属性</text></view>
                </uni-card>
            </navigator>

            <uni-card
                @click=""
                title="音乐应用">
                11111
            </uni-card>
            <uni-card
                title="创建歌单"
                @click=""
                >我喜欢音乐</uni-card
            >
            <view class="title"><text>创建歌单</text><text>收藏歌单</text></view>
            <uni-card
                title=""
                @click="">
                <text>创建歌单</text>
            </uni-card>
            <uni-card
                title="收藏歌单"
                @click="">
            </uni-card>
        </scroll-view>
    </view>
</template>

<script lang="ts" setup>
    import navigation from "@/components/navCustom/navCustom.vue"
    import { userStore } from "@/store/modules/user"
    const $userStore = userStore()

    // console.log('clear',$userStore.clear());
    // console.log("login1111", $userStore.login())
    // console.log("userstore", $userStore.test())
</script>

<style scoped lang="scss">
    page {
        width: 100vw;
        height: 100vh;
        padding: 0 5px;
        .image {
            height: 20px;
            width: 20px;
            border-radius: 50%;
        }
    }
    .viewport {
        .navigationBar {
            height: var(--window-top);
        }
    }
    .scroll-view {
        height: calc(100vh - var(--window-bottom) - var(--window-top));
        width: 100%;
        position: relative;
        // background-color: skyblue;
        position: relative;
        .avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid black;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 20%);
            z-index: 1;
        }
    }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px !important;
        .name {
            margin-top: 30px;
        }
    }
    .title {
        display: flex;
        justify-content: space-around;
        text-decoration: 1px solid red;
    }
</style>
