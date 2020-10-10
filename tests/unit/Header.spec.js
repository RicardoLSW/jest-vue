import { shallowMount } from "@vue/test-utils";
import Header from "@/views/TodoList/component/Header";

it("Header style snapshot", function() {
  const wrapper = shallowMount(Header);
  expect(wrapper).toMatchSnapshot();
});

it("Header should have input", function() {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  expect(input.exists()).toBe(true);
});

it("input value should null", function() {
  const wrapper = shallowMount(Header);
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe("");
});

it("inputValue should equal set value", function() {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("ricardo luo");
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe("ricardo luo");
});

it("If inputValue has no value, the add event should not be triggered", function() {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("");
  input.trigger("keyup.enter");
  expect(wrapper.emitted().add).toBeFalsy();
});

it("if inputValue has value, the add event should be triggered and clear inputValue", function() {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("ricardo luo");
  input.trigger("keyup.enter");
  expect(wrapper.emitted().add).toBeTruthy();
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe("");
});
