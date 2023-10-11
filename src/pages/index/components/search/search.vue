<template>
    <!-- <view class="viewport">
        <view class="search">
            <uni-icons type="list" size="30"></uni-icons>
            <input type="text" placeholder="请输入文本" class="input" />
            <uni-icons type="mic-filled" size="30"></uni-icons>
        </view>
    </view> -->
    <uni-nav-bar :border="false" fixed>
            <view class="search">
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
                    color="#000" />
            </template>
            <template #right>
                <uni-icons
                    type="mic-filled"
                    size="30"
                    color="#000" />
            </template>
        </uni-nav-bar>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
    .viewport {
        height: var(--window-top);
        width: 100%;
        z-index: 999;
    }
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
