<template>
    <uni-drawer
        ref="drawer"
        :width="300">
        <view class="drawer">
            <view class="profile"
                ><image
                    class="avatar"
                    src="@/static/icon/love.png"></image>
                <text>名字</text>
                <uni-icons
                    type="scan"
                    size="25"
                    class="icon"></uni-icons>
            </view>
            <scroll-view class="scroll-view">
                <uni-card
                    spacing="0"
                    margin="0"
                    title="">
                    <view class="member"><text>会员</text><text>会员中心</text></view>
                    <view class="message">会员专属描述</view>
                </uni-card>
                <uni-card
                    spacing="0"
                    margin="10px 0"
                    title=""
                    class="center">
                    <view class="text"
                        ><uni-icons
                            type="email"
                            size="25"></uni-icons
                        >我的消息</view
                    >
                    <view class="text"
                        ><uni-icons
                            type="color"
                            size="25"></uni-icons
                        >云呗中心</view
                    >
                    <view >
                        <uni-icons
                            type="starhalf"
                            size="25"></uni-icons
                        >创作中心</view
                    >
                </uni-card>
            </scroll-view>
        </view>
    </uni-drawer>
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    const drawer = ref()
    const drawerOpen = () => {
        drawer.value.open()
    }
    defineExpose({ open: drawerOpen })
</script>

<style scoped lang="scss">
    .drawer {
        padding: 10px;
    }
    .profile {
        display: flex;
        align-items: center;
        font-size: 20px;
        position: relative;
        .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .icon {
            position: absolute;
            right: 10px;
        }
    }
    .scroll-view {
        height: calc(100vh - var(--window-top));
        .member {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
        }
        .center {
           text:last-child {
                font-size: 20px;
                line-height: 44px;
                // background-color: red;
            }
            .text {
                font-size: 20px;
                line-height: 44px;
                border-bottom: 1px solid rgba(155, 151, 151,0.5);
            }

        }
    }
</style>
