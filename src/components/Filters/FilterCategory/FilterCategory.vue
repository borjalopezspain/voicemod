<template>
  <div class="category-list-container">
    <div class="category-list-container__eye-icon">
      <img src="../../../assets/filterIcons/filter.svg" alt="filter icon" />
    </div>
    <dropdown-component
      :drop-down-options="voiceCategoryList"
      @callFilter="callFilterVoicesByCategory"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import Dropdown from "@/components/Drowdown/Dropdown.vue";
import { IFilterOrderItem } from "@/models";

@Component({
  components: {
    "dropdown-component": Dropdown,
  },
})
export default class FilterCategory extends Vue {
  //STORE
  @State((state) => state.Voices.voiceCategoryList)
  voiceCategoryList!: string[];

  @Action
  private filterVoicesBySelectedCategory!: (selectedCategory: string) => void;

  //METHODS
  callFilterVoicesByCategory(selectedCategory: string): void {
    this.filterVoicesBySelectedCategory(selectedCategory);
  }
}
</script>

<style scoped lang="scss" src="./FilterCategory.scss" />
