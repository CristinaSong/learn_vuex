<template>
  <div>
    <!-- <h4>这个世界不仅有男人和女人</h4>
    <slot name="girl"></slot>
    <div style="height:1px;background-color:red;"></div>
    <slot name="boy"></slot>
    <div style="height:1px;background-color:red;"></div>
    <slot></slot> -->

    <!-- <slot say="你好"></slot> -->

    <ul>
        <li v-for="list in lists" :key = list>
            <slot :bbbbb="list"></slot>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['lists'],
}
</script>

<style>

</style>
