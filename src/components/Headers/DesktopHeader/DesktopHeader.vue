<template>
  <header class="desktop-header">
    <div class="desktop-header__search">
      <search />
    </div>
    <div class="desktop-header__filters">
      <selected-voice />
      <filter-category />
      <filter-order-by />
      <filter-random />
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
export default class DesktopHeader extends Vue {}
</script>

<style scoped lang="scss" src="./DesktopHeader.scss" />
