<template>
  <div class="header">
    <div>TodoList</div>
    <input
      data-test="input"
      v-model="inputValue"
      @keyup.enter="addTodoItem"
      placeholder="TodoItem"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    addTodoItem() {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.inputValue = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  background-color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: white;
    font-size: 24px;
    line-height: 60px;
  }
  input {
    width: 360px;
    margin-left: 50px;
    height: 30px;
  }
}
</style>
