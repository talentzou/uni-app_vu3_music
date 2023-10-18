export const rules = {
    userName: {
        rules: [
            {
                required: true,
                errorMessage: "请输入用户名",
                format: "email",
            },
            {
                validateFunction: function (rule, value, data, callback) {
                    // const reg=/^14$/
                    const reg = /^1[3-9]\d{9}$/
                    if (!reg.test(value)) {
                        callback("用户名格式不正确")
                    }
                    return true
                },
            },
        ],
    },
    password: {
        rules: [
            {
                required: true,
                errorMessage: "请输入密码",
            },
            {
                validateFunction: function (rule, value, data, callback) {
                    const reg = /^\w{6,}/
                    if (!reg.test(value)) {
                        callback("用户名格式不正确")
                    }
                    return true
                },
            },
        ],
    },
}