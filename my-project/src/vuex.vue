<template>
    <div id="app">
        <h1>Hello Vuex</h1>
       <p>{{aaa}}</p>
       <button @click="add">+</button>
       <button @click="sub">-</button>  
       <ul>
           <li v-for="(item,index) in items">
               {{index}}--{{item.message}}
           </li>
       </ul> 
       <p v-once>原始数据：{{aaa}}</p> 
       <p>修改过的数据：{{aaa}}</p>    
    </div>

</template>

<script>
export default {
    data(){
        return{
            aaa:2,
            items:[
                {message:'first'},
                {message:'second'}
            ]
        }
    },
    methods:{
        add:function(){
            this.aaa++
        },
        sub:function(){
            this.aaa--
        }

    }
}
</script>

<style>

</style>
