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
    <div class="qqq"></div>

    <!-- <li>
      <h3 class="F7">下拉框选择案例</h3>
      <div class="por">
        <div class="selectBox" style="width: 400px;">
          <div class="selectBox_show" v-on:click.stop="arrowDown">
            <i class="icon icon_arrowDown"></i>
            <p title="请选择">{{unitName}}</p>
            <input type="hidden" name="unit" v-model="unitModel">
          </div>
          <div
            class="selectBox_list"
            v-show="isShowSelect"
            style="max-height: 240px; width: 398px; display: block;"
          >
            <div
              class="selectBox_listLi"
              v-for="(item, index) in dataList"
              @click.stop="select(item, index)"
            >{{item.value}}</div>
          </div>
        </div>
      </div>

    </li> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   isShowSelect: false,
    //   dataList: [
    //     { key: -1, value: "请选择" },
    //     { key: 0, value: "苹果" },
    //     { key: 1, value: "香蕉" }
    //   ],
    //   unitName: "请选择",

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
//     arrowDown() {
//       this.isShowSelect = !this.isShowSelect;
//     },
//     select(item, index) {
//       this.isShowSelect = false;
//       console.log(item);
//       console.log(index);
//       this.unitModel = index;
//       this.unitName = item.value;
//     }
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
.qqq {
  width: 200px;
  height: 30px;
  background-image: linear-gradient(90deg, #ff6294 0%, #feae67 100%);
  border-radius: 6px 6px 0px 0px;
}
table {
  border-collapse: collapse;
}
</style>
