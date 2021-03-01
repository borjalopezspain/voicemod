<template>
  <header class="mobile-header">
    <div
      class="mobile-header__icon"
      :class="showMenu ? 'mobile-header__icon--opened' : ''"
      @click="showMenu = !showMenu"
    >
      <div
        class="menu-bar"
        v-for="(bar, index) of 3"
        :class="[
          `menu-bar__${index}`,
          changeMenuIconColor ? 'menu-bar--scrolled-color' : '',
        ]"
        :key="index"
      />
    </div>
    <div
      class="menu-container"
      :class="showMenu ? 'menu-container--opened' : ''"
    >
      <div class="menu-container__search">
        <search />
      </div>
      <div class="menu-container__filters">
        <div class="menu-container__filter filter-cateogry">
          <filter-category />
        </div>
        <div class="menu-container__filter filter-order-by">
          <filter-order-by />
        </div>
        <div class="grouped-filter">
          <div class="menu-container__filter selected-cateogy">
            <selected-voice />
          </div>
          <div class="menu-container__filter filter-random">
            <filter-random />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Search from "@/components/Search/Search.vue";
import SelectedVoice from "@/components/SelectedVoice/SelectedVoice.vue";
import FilterCategory from "@/components/Filters/FilterCategory/FilterCategory.vue";
import FilterOrderBy from "@/components/Filters/FilterOrderBy/FilterOrderBy.vue";
import FilterRandom from "@/components/Filters/FilterRandom/FilterRandom.vue";

@Component({
  components: {
    search: Search,
    "selected-voice": SelectedVoice,
    "filter-category": FilterCategory,
    "filter-order-by": FilterOrderBy,
    "filter-random": FilterRandom,
  },
})
export default class MobileHeader extends Vue {
  //DATA
  showMenu: boolean = false;
  changeMenuIconColor: boolean = false;

  //METHODS
  scrollHandler() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      this.changeMenuIconColor = true;
    } else {
      this.changeMenuIconColor = false;
    }
  }

  mounted(): void {
    window.addEventListener("scroll", this.scrollHandler);
  }

  destroyed(): void {
    window.addEventListener("scroll", () => {});
  }
}
</script>

<style scoped lang="scss" src="./MobileHeader.scss" />
