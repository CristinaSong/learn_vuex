<template>
    <div id="app">
        <h1>Hello Vuex</h1>
       <p>{{aaa}}</p>
       <button @click="add">+</button>
       <button @click="sub">-</button>       
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            aaa:2,
        }
    },
    methods:{
        add:function(){
            this.aaa++
        },
        sub:function(){
            this.aaa--
        }

    },
    //vue2.0的钩子除了保留1.0的created,其他都改变了
    beforeCreate:function(){
        console.log('1-beforeCreate 初始化之后')
    },
    created(){
        console.log('2-created 创建完成')
    },
    beforeMount(){
        console.log('3-beforeMount 挂载之前 虚拟dom变成实体dom（dom没显示）')
    },
    mounted(){
        console.log('4-mounted 创建完成（dom显示）')
    },
    //有跟新:watch的值--2更改为3 
    beforeUpdate(){
        console.log('5-beforeUpdate 数据更新前')
    },
    update(){
        console.log('6-update 被更新后')
    },
    //动态载入标签
    // <keep-alive></keep-alive>
    activated(){
        console.log('7-activated')
    },
    deactivated(){
        console.log('8-deactivated')
    },
    beforeDestroy(){
        console.log('9-beforeDestroy 销毁之前')
    },
    destroyed(){
        console.log('10-destroyed 销毁之后')
    },
    watch:{
        'aaa':function(newdata,olddata){
            console.log(olddata+'更改为'+newdata)
        }
    }
}
</script>

<style>

</style>
