<template>
  <view class="viewport">
    <scroll-view
      scroll-x
      show-scrollbar="false"
    >
      <navigator
        url="/pages/dailyRec/dailyRec"
        class="flex-item"
      >
        <view
          v-for="item in tabbar"
          :key="item.name"
          class="title"
        >
          <image
            class="tabbar-image"
            :src="item.iconUrl"
            mode="aspectFit"
          >
          </image>
          <view>
            <text>{{ item.name }}</text></view
          >
        </view>
      </navigator>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import {  ref ,onMounted } from "vue";
import { homepage } from "@/server/home";
import type {tabbarData} from"@/types/home"

//发现导航条
const tabbar = ref<tabbarData[]>([]);
onMounted(async () => {
  let res = await homepage()
  console.log("homepage", res);
  tabbar.value = res.data ;
});
</script>

<style scoped lang="scss">
.viewport {
  width: 100%;
}
.flex-item {
  display: flex;
  overflow-x: scroll;
  font-size: 10px;
  .title {
    margin-left: 10px;
    height: 80px;
  }

  .tabbar-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(178, 93, 93);
  }
}
</style>
