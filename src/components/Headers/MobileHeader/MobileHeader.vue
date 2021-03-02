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
          <filter-with-dropdown
            filter-icon-name="filter"
            :drop-down-options="categoryFilterOptions"
            @callFilterAction="callFilterVoicesByCategory"
          >
            <img src="@/assets/filterIcons/filter.svg" alt="filter icon" />
          </filter-with-dropdown>
        </div>
        <div class="menu-container__filter filter-order-by">
          <filter-with-dropdown
            :drop-down-options="orderByFilterOptions"
            @callFilterAction="callFilterVoicesByOrder"
          >
            <img src="@/assets/filterIcons/order.svg" alt="filter icon" />
          </filter-with-dropdown>
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
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action, State } from "vuex-class";

import Search from "@/components/Search/Search.vue";
import SelectedVoice from "@/components/SelectedVoice/SelectedVoice.vue";
import FilterWithDropdown from "@/components/Filters/FilterWithDropdown/FilterWithDropdown.vue";
import FilterRandom from "@/components/Filters/FilterRandom/FilterRandom.vue";

import { IFilterOrderItem } from "@/models";

@Component({
  components: {
    search: Search,
    "selected-voice": SelectedVoice,
    "filter-random": FilterRandom,
    "filter-with-dropdown": FilterWithDropdown,
  },
})
export default class MobileHeader extends Vue {
  @Prop({ required: true, type: Array })
  categoryFilterOptions!: IFilterOrderItem[];
  @Prop({ required: true, type: Array })
  orderByFilterOptions!: IFilterOrderItem[];

  //DATA
  showMenu: boolean = false;
  changeMenuIconColor: boolean = false;
  scrollJumpMenu: number = 200;

  //METHODS
  callFilterVoicesByOrder(selectedOption: string): void {
    this.$emit("filterByOrder", selectedOption);
  }

  callFilterVoicesByCategory(selectedOption: string): void {
    this.$emit("filterByCategory", selectedOption);
  }
  scrollHandler() {
    if (
      document.body.scrollTop > this.scrollJumpMenu ||
      document.documentElement.scrollTop > this.scrollJumpMenu
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
