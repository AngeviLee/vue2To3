<template>
<div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
    <button @click="changeMsg">修改msg</button>
    <p>{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <Test :msg="msg2" />
</div>
</template>

<script>
import Test from '@/components/Test'  // 引入子组件
import {
    reactive,
    ref,
    toRefs,
    computed,  // 引入计算属性
    watch,  // 引入侦听器
    onMounted,  // 引入生命周期钩子函数
    onUnmounted,
    provide,  // 引入生命周期钩子函数
} from '@vue/composition-api'
export default {
    components: {  // 注册挂载子组件
        Test
    }, 
    data() {
        return {
            msg: '对不起，我是一个警察'
        }
    },

    beforeCreate() {
        // console.log('beforeCreated');
    },

    // vue3的第一种方式（推荐）
    setup() {
        // console.log('setup');
        provide('msg', '依赖注入')

        const state = reactive({
            msg2: '你好，我是坏蛋！',
            num: 1,
            // 计算属性的第二种方式
            doubleNum: computed(() => state.num * 3)
        })

        watch(() => state.num, (newValue, oldValue) => {
            console.log('旧值', oldValue);
            console.log('新值', newValue);
        })

        // return state
        // vue3.x第二种方式（不推荐）
        const msg3 = ref('加油加油')

        const changeMsg = () => {
            // vue3.x 方式修改值
            state.msg2 = '你是一个大花旦!'
            // vur3.x通过方式2ref修改值
            msg3.value = '刚把得',
            state.num++
        }

        // vue3.x计算属性：第一种方式
        // const doubleNum = computed(() => {
        //     return state.num * 2
        // })

        onMounted(() => {
            // console.log('onMounted');
        })

        onUnmounted(() => {
            // console.log('onUnmounted');
        })

        return {
            msg3,
            // vue3.x双向数据绑定
            ...toRefs(state),
            // 返回函数方法
            changeMsg,
            // doubleNum
        }
    },
    /**
     * vue3.x中，setup生命钩子函数：
     *   ① 代替2.x中的created和beforeCreated钩子函数
     *   ② setup钩子函数执行顺序在created和beforeCreated钩子函数之间
     */
    created() {
    //   console.log('created');  
    },

}
</script>
