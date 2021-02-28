<template>
  <div class="category-list-container">
    <div class="category-list-container__eye-icon">
      <img src="../../../assets/filterIcons/filter.svg" alt="filter icon" />
    </div>
    <div
      class="category-list-container__drowdown-btn"
      @click="showCategoryOptions = !showCategoryOptions"
    >
      {{ selectedCategory }}
      <transition name="slide">
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

@Component
export default class FilterCategory extends Vue {
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
}
</script>

<style scoped lang="scss" src="./FilterCategory.scss" />
