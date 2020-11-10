<template>
    <div>
        子组件---- {{ myMsg }}
    </div>
</template>
<script>
import { reactive, inject } from '@vue/composition-api'  // 在vue2.x中使用vue3.x前提
export default {
    // props: ['msg'],  // 利用props接受父组件传递的值
    setup(props) {
        const state = reactive({
            // myMsg: props.msg
            myMsg: inject('msg')
        })

        return state
    }
}
</script>