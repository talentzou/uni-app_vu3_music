<!-- <template>
    <navigation icon="plusempty"></navigation>
    <scroll-view
        class="scroll-view"
        scroll-y>
        <view
        style="border: 1px solid rgba(231, 225, 225,0.3);"
            v-for="item in 8"
            :key="item">
            <view class="user">
                <image
                    class="avatar"
                    src="@/static/login.jpg"></image>
                <text class="nickname">名字</text>
                <text>在歌曲下评论</text>
            </view>
            <view class="issues">
                <text class="session">111111111111111</text>
                <view class="songInfo"
                    ><image
                        class="song-image"
                        src="@/static/login.jpg"></image>
                    <view style="margin-left: 5px;"><text>歌曲</text><text>歌手</text></view>
                </view>
                <view class="tag"
                    ><uni-tag
                        text="标签"
                        :circle="true"></uni-tag>
                        <uni-tag
                        text="标签"
                        :circle="true"></uni-tag>
                        <uni-tag
                        text="标签"
                        :circle="true"></uni-tag></view
            ></view>
        </view>
    </scroll-view>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import {top} from '@/server/video'
    import navigation from "@/components/navCustom/navCustom.vue"
    onMounted(async()=>{
      let res =await top()
      console.log(res);
      
    })
</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
    }
    .scroll-view {
        width: 100%;
        height: calc(100vh - var(--window-bottom) - var(--window-top));
        padding: 10px 5px;
        padding-bottom:  var(--window-bottom);
        .user {
            display: flex;
            padding: 5px 0;
            align-items: center;
        }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .issues {
            padding-left: var(--window-bottom);

            .session {
                display: -webkit-box;
                line-height: 30px;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5; // 最多显示两行
                overflow: hidden;
                text-overflow: ellipsis; // 超出内容显示省略号
            }
            .songInfo {
                background-color: rgb(212, 204, 204);
                padding: 5px;
                display: flex;
            }
            .song-image {
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
            .tag {
                line-height: 40px;
            }
        }
    }
</style> -->
