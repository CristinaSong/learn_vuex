<template>
    <div id="app">
        <h1>Hello Vuex</h1>
       <p>{{$store.state.count}}</p>
       <button @click="$store.commit('jia')">+</button>
       <button @click="$store.commit('jian')">-</button>       
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
