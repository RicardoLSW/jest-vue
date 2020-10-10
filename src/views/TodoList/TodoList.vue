<template>
  <div>
    <Header @add="addUndoItem" />
  </div>
</template>

<script>
import Header from "@/views/TodoList/component/Header";
export default {
  name: "TodoList",
  components: {
    Header
  },
  data() {
    return {
      undoList: []
    };
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push(inputValue);
    }
  }
};
</script>

<style scoped></style>
