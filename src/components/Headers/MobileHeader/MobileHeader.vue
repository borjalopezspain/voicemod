<template>
  <header class="mobile-header">
    <div class="mobile-header__icon" @click="showMenu = !showMenu">
      <img src="../../../assets/otherIcons/menu.svg" alt="menu icon" />
    </div>
    <div v-if="showMenu" class="menu-container">
      <div @click="showMenu = false" class="menu-container__close">
        <img
          src="../../../assets/filterIcons/search-close.svg"
          alt="close menu"
        />
      </div>
      <filter-category />
    </div>
    <!-- <div class="desktop-header__search">
      <search />
    </div>
    <div class="desktop-header__filters">
      <div class="desktop-header__filter selected-cateogy">
        <selected-voice />
      </div>
      <div class="desktop-header__filter filter-cateogry">
        <filter-category />
      </div>
      <div class="desktop-header__filter filter-order-by">
        <filter-order-by />
      </div>
      <div class="desktop-header__filter filter-random">
        <filter-random />
      </div>
    </div> -->
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
}
</script>

<style scoped lang="scss" src="./MobileHeader.scss" />
