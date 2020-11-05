<template>
<div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
</div>
</template>

<script>
import {
    reactive,
    ref
} from '@vue/composition-api'
export default {
    data() {
        return {
            msg: '对不起，我是一个警察'
        }
    },
    // vue3的第一种方式
    setup() {
        const state = reactive({
            msg2: '你好，我是坏蛋！'
        })

        // return state
        const msg3 = ref('加油加油')

        return {
            msg3
        }
    }
}
</script>
