<template>
<div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
    <button @click="changeMsg">修改msg</button>
</div>
</template>

<script>
import {
    reactive,
    ref,
    toRefs
} from '@vue/composition-api'
export default {
    data() {
        return {
            msg: '对不起，我是一个警察'
        }
    },
    // vue3的第一种方式（推荐）
    setup() {
        const state = reactive({
            msg2: '你好，我是坏蛋！'
        })

        // return state
        // vue3.x第二种方式（不推荐）
        const msg3 = ref('加油加油')

        const changeMsg = () => {
            // vue3.x 方式修改值
            state.msg2 = '你是一个大花旦!'
            // vur3.x通过方式2ref修改值
            msg3.value = '刚把得'
        }

        return {
            msg3,
            // vue3.x双向数据绑定
            ...toRefs(state),
            // 返回函数方法
            changeMsg
        }
    }
}
</script>
