<template>
    <div id="hello">
        <button>{{txt}}</button>
        <p>{{ddd}}</p>
    </div>
</template>

<script>
export default {
    name:'hello',
    props:[
        'txt',
        'ddd'
    ],

}
</script>

<style>
    #hello button{
        background-color: red;
        width: 200px;
        height: 50px;
    }

</style>
