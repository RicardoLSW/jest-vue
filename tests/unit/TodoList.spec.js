import { shallowMount } from "@vue/test-utils";
import TodoList from "@/views/TodoList/TodoList";
import Header from "@/views/TodoList/component/Header";

describe("TodoList.vue", () => {
  it("if TodoList init, undoList should be null", function() {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });

  it("if add event is triggered, undoList should add a data", function() {
    const content = "ricardo luo";
    const wrapper = shallowMount(TodoList);
    const header = wrapper.findComponent(Header);
    header.vm.$emit("add", content);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([content]);
  });
});
