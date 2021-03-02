<template>
  <header class="desktop-header">
    <div class="desktop-header__search">
      <search />
    </div>
    <div class="desktop-header__filters">
      <div class="desktop-header__filter selected-cateogy">
        <selected-voice />
      </div>
      <div class="desktop-header__filter filter-cateogry">
        <filter-with-dropdown
          :drop-down-options="categoryFilterOptions"
          @callFilterAction="callFilterVoicesByCategory"
        >
          <img src="@/assets/filterIcons/filter.svg" alt="filter icon" />
        </filter-with-dropdown>
      </div>
      <div class="desktop-header__filter filter-order-by">
        <filter-with-dropdown
          :drop-down-options="orderByFilterOptions"
          @callFilterAction="callFilterVoicesByOrder"
        >
          <img src="@/assets/filterIcons/order.svg" alt="order icon" />
        </filter-with-dropdown>
      </div>
      <div class="desktop-header__filter filter-random">
        <filter-random />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Search from "@/components/Search/Search.vue";
import SelectedVoice from "@/components/SelectedVoice/SelectedVoice.vue";
import FilterRandom from "@/components/Filters/FilterRandom/FilterRandom.vue";
import FilterWithDropdown from "@/components/Filters/FilterWithDropdown/FilterWithDropdown.vue";

import { IFilterOrderItem } from "@/models";

@Component({
  components: {
    search: Search,
    "selected-voice": SelectedVoice,
    "filter-random": FilterRandom,
    "filter-with-dropdown": FilterWithDropdown,
  },
})
export default class DesktopHeader extends Vue {
  @Prop({ required: true, type: Array })
  categoryFilterOptions!: IFilterOrderItem[];
  @Prop({ required: true, type: Array })
  orderByFilterOptions!: IFilterOrderItem[];

  //METHODS
  callFilterVoicesByOrder(selectedOption: string): void {
    this.$emit("filterByOrder", selectedOption);
  }

  callFilterVoicesByCategory(selectedOption: string): void {
    this.$emit("filterByCategory", selectedOption);
  }
}
</script>

<style scoped lang="scss" src="./DesktopHeader.scss" />
