<template>
  <form>
    id: <input type="text" v-model="addList.stu.id" /><br />
    first_name:
    <input type="text" v-model="addList.stu.first_name" /><br />
    last_name: <input type="text" v-model="addList.stu.last_name" />
  </form>
  <button @click="HandleAddList">添加</button>
  <ul>
    <li
      v-for="(item, index) in list.stu"
      :key="item.id"
      @click="handDelete(index)"
    >
      {{ item.first_name }} --- {{ item.last_name }}
    </li>
  </ul>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App2",
  setup() {
    //这里只能是对象类型诶，不能是数组等其他的。不然会出现错误。
    let list = reactive({
      stu: [
        { id: 1, first_name: "zhang", last_name: "hao" },
        { id: 2, first_name: "li", last_name: "longmiao" },
        { id: 3, first_name: "zhang", last_name: "zhijie" },
      ],
    });

    let addList = reactive({
      stu: {
        id: "",
        first_name: "",
        last_name: "",
      },
    });

    function handDelete(currentId) {
      // console.log(list);
      list.stu = list.stu.filter((item, index) => index !== currentId);
    }

    function HandleAddList(e) {
      e.preventDefault();
      console.log(addList.stu);
      // 这里利用assign方法来复制数据,不然对象数据类型，改变的是内存的地址。如果想要清除输入框中的内容，就会出现错误。
      let stu = Object.assign({}, addList.stu);
      list.stu.push(stu);

      addList.stu.id = "";
      addList.stu.first_name = "";
      addList.stu.last_name = "";
      addList.stu.last_name = "";
    }

    return {
      list,
      handDelete,
      addList,
      HandleAddList,
    };
  },
};
</script>

<style>
</style>