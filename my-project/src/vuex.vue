<template>
    <div id="app">
        <h1>props使用方式</h1>
        <hello txt='组件' v-bind:ddd="btnText"></hello>
        <p><input type="text" v-model="btnText"></p>
    </div>
</template>

<script>
import hello from './components/hello.vue'//
export default {
    name:'app',
    components:{hello},//
    data(){
        return{
           btnText:"Hello World"
        }
    }
}
</script>
