<template>
    <view class="viewport">
        <navigation icon="search" nav="bars"></navigation>
        <scroll-view class="scroll-view" scroll-y="false">
            <navigator
                url="/pages/login/login"
                hover-class="navigator-hover"
                open-type="navigate">
                <image
                    class="avatar"
                    src="@/static/icon/user-check.png"></image>
                <uni-card spacing="0"
                    class="card">
                    <view class="name"><text>名字</text></view>
                    <view><text>属性</text></view>
                </uni-card>
            </navigator>

            <uni-card
                title="音乐应用"
                spacing="0">
                <view class="application">
                    <view
                        v-for="(item, index) in tags"
                        :key="item"
                        ><uni-icons
                            :type="icons[index]"
                            size="30"></uni-icons
                        ><view
                            ><text>{{ item }}</text></view
                        ></view
                    >
                </view>
            </uni-card>
            <uni-card title="我喜欢的音乐" spacing="0"
                ><view class="create">
                    <uni-icons
                        type="plus"
                        size="30"></uni-icons
                    ><text> 添加</text></view
                >
            </uni-card>
            <view class="title"><text>创建歌单</text><text>收藏歌单</text></view>
            <uni-card title="创建歌单">
                <view class="create">
                    <uni-icons
                        type="plus"
                        size="30"></uni-icons
                    ><text>添加</text></view
                >
            </uni-card>
            <uni-card title="收藏歌单">
                <view class="create">
                    <uni-icons
                        type="plus"
                        size="30"></uni-icons
                    ><text>添加</text></view
                >
            </uni-card>
        </scroll-view>
        <Play></Play>
    </view>
</template>

<script lang="ts" setup>
    import navigation from "@/components/navCustom/navCustom.vue"
    const tags = ["最近播放", "本地下载", "云盘", "已购"]
    const icons = ["headphones", "download", "cloud-upload", "cart"]

</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
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
        // height: calc(100vh - var(--window-bottom) - var(--window-top));
        height: calc(100vh - $uni-double-bottom - $uni-nav-top);
        box-sizing: border-box;
        // padding-bottom: $uni-nav-bottom;
        padding-bottom: $uni-nav-bottom;
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
        .application {
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            // background-color: red;
        }
        .create {
            display: flex;
            align-items: center;
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
