<template>
  <div class="category-list-container">
    <div class="category-list-container__eye-icon">
      <img src="../../../assets/filterIcons/filter.svg" alt="filter icon" />
    </div>
    <div
      class="category-list-container__drowdown-btn"
      @click="showCategoryOptions = !showCategoryOptions"
      v-click-outside="hideCategories"
    >
      {{ selectedCategory }}
      <transition name="openDropdown">
        <ul
          class="category-list-container__drowdown"
          v-if="showCategoryOptions"
        >
          <li
            v-for="category in voiceCategoryList"
            :key="category"
            class="category-list-container__option"
            @click="filterVoicesByCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
      </transition>
      <span
        class="category-list-container__icon"
        :class="
          showCategoryOptions ? 'category-list-container__icon--open' : ''
        "
      >
        <img
          src="../../../assets/filterIcons/select-arrow.svg"
          alt="select arrow"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import ClickOutside from "vue-click-outside";

@Component({
  directives: {
    ClickOutside,
  },
})
export default class FilterCategory extends Vue {
  //STORE
  @State((state) => state.Voices.voiceCategoryList)
  voiceCategoryList!: string[];

  @Action
  private filterVoicesBySelectedCategory!: (selectedCategory: string) => void;

  //DATA
  selectedCategory: string = "all";
  showCategoryOptions: boolean = false;

  //METHODS
  filterVoicesByCategory(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    this.filterVoicesBySelectedCategory(selectedCategory);
  }

  hideCategories(): void {
    this.showCategoryOptions = false;
  }
}
</script>

<style scoped lang="scss" src="./FilterCategory.scss" />
