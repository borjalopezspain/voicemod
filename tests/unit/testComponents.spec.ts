import { shallowMount } from "@vue/test-utils";
import Search from "@/components/Search/Search.vue";
import DropDown from "@/components/Drowdown/Dropdown.vue";

describe("test mount components", () => {
  it("renders Search component", () => {
    const wrapper = shallowMount(Search);
    expect(wrapper.find(".search-container").exists()).toBe(true);
  });

  it("check dropdown is closed", () => {
    const wrapper = shallowMount(DropDown, {
      propsData: {
        dropDownOptions: [
          {
            label: "testLabel",
            value: "testValue",
          },
        ],
      },
    });
    expect(wrapper.vm.$data.showDrowdown).toBe(false);
  });
});
