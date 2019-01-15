<template>
  <div class="app">
    <table border="1">
      <thead>
        <tr>
          <input
            type="checkbox"
            v-model="allchecked"
            @click="changeState(allchecked)"
            style="zoom:200%;vertical-align: middle"
          >
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key = item.name>
          <td>
            <input type="checkbox" v-model="item.checked" style="zoom:200%">
          </td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "小明",
          age: 23,
          checked: false
        },
        {
          name: "小红",
          age: 2,
          checked: true
        },
        {
          name: "小蓝",
          age: 23,
          checked: true
        },
        {
          name: "小bai",
          age: 40,
          checked: true
        },
        {
          name: "王小二",
          age: 18,
          checked: false
        }
      ],
      allchecked: false
    };
  },
  methods: {
    changeState(val) {
      this.list.forEach(item => {
        if (val === false) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
  },
  watch: {
    list: {
      handler(val) {
        console.log("watch数组的变化", val);
        var i = 0;
        this.list.forEach(item => {
          if (item.checked === true) i++;
        });
        if (i === this.list.length) {
          this.allchecked = true;
        } else {
          this.allchecked = false;
        }
      },
      deep: true
    }
  }
};
</script>

<style>
table {
  border-collapse: collapse;
}
</style>
