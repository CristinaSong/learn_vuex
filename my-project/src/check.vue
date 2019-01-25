<template>
  <div class="app">
    <!-- 关于插槽 -->
    <navigation-link :lists="nameList">
        <!-- 具名插槽与默认插槽 -->
        <!-- <template slot="girl">
            漂亮、美丽、购物、逛街
        </template>
        <template slot="boy">
            帅气、才实
        </template>
        <div>
            我是一类人，
            我是默认的插槽
        </div> -->

        <!-- 作用域插槽：组件上的属性，可以在组件元素内使用 -->
        <!-- <template slot-scope="a"> -->
        <!-- {"say":"你好"} -->
            <!-- {{a}}
        </template> -->
    
    <!-- 我可以随便根据这个对象的属性值进行操作:当id==1，前面加个你好 -->        
    <template slot-scope="a">
            <!-- {{a}} -->
        <div v-if='a.bbbbb.id==1'>你好：<span>{{a.bbbbb.name}}</span></div>
        <div v-else>{{a.bbbbb.name}}</div>
    </template>

    </navigation-link>
  </div>
</template>

<script>
import navigationLink from './components/navigationLink.vue'
export default {
  data() {
    return {
       nameList:[
            {id:1,name:'孙悟空'},
            {id:2,name:'猪八戒'},
            {id:3,name:'沙和尚'},
            {id:4,name:'唐僧'},
            {id:5,name:'小白龙'},
        ] 
    }
  },
  components:{
    navigationLink,
  },
};
</script>

<style>
</style>
