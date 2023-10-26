<template>
    <view class="viewport">
        <image
            class="login-image"
            src="@/static/login.jpg"></image>
        <view style="width: 100%">
            <uni-card class="card">
                <uni-forms
                    :model="profile"
                    :rules="rules"
                    validateTrigger="blur"
                    ref="form">
                    <uni-forms-item
                        name="userName"
                        required
                        label="用户">
                        <uni-easyinput
                            v-model="profile.userName"
                            focus
                            prefixIcon="person"
                            placeholder="请输入用户名"
                            trim="both"></uni-easyinput>
                    </uni-forms-item>
                    <uni-forms-item
                        name="password"
                        label="密码"
                        required>
                        <uni-easyinput
                            type="password"
                            prefixIcon="locked"
                            v-model="profile.password"
                            placeholder="请输入密码"
                            trim="both"></uni-easyinput>
                    </uni-forms-item>
                    <button @click="submit">提交</button>
                </uni-forms>
            </uni-card>
        </view>
    </view>
</template>

<script lang="ts" setup>
    import { ref, reactive } from "vue"
    import {rules} from "@/utils/rule";
    import { userStore } from "@/store/modules/user";
    const $userStoreData=userStore()
    type user = {
        userName: string
        password: string
    }
    const profile = reactive<user>({
        userName: "tengjingshu19@163.com",
        password: "aa123456",
    })
  
    const form = ref<any>()
    const submit = () => {
        form.value
            .validate()
            .then(async (res: user) => {
                console.log("表单数据信息：", res)
                $userStoreData.login(profile)
            })
            .catch((err:any) => {
                console.log("表单错误信息：", err)
            })
    }
</script>

<style scoped lang="scss">
    page {
        width: 100%;
        height: 100%;
        text {
            font-size: 20px;
        }
    }
    .viewport {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .login-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
</style>
