import { shallowMount } from "@vue/test-utils";
import Search from "@/components/Search/Search.vue";
import FilterCategory from "@/components/Filters/FilterCategory/FilterCategory.vue";

describe("test mount components", () => {
  it("renders Search component", () => {
    const wrapper = shallowMount(Search);
    expect(wrapper.find(".search-container").exists()).toBe(true);
  });

  it("has 'all' as initial filter value", () => {
    const wrapper = shallowMount(FilterCategory);
    expect(wrapper.vm.$data.selectedCategory).toBe("all");
  });
});
