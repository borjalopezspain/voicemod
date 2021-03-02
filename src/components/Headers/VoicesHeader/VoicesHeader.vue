<template>
  <header class="header">
    <desktop-header
      class="desktop-header"
      :category-filter-options="categoryDropdownOptions"
      :order-by-filter-options="orderByDropDownOptions"
      @filterByCategory="callFilterVoicesByCategory"
      @filterByOrder="callFilterVoicesByOrder"
    />
    <mobile-header
      class="mobile-header"
      :category-filter-options="categoryDropdownOptions"
      :order-by-filter-options="orderByDropDownOptions"
      @filterByCategory="callFilterVoicesByCategory"
      @filterByOrder="callFilterVoicesByOrder"
    />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

import DesktopHeader from "@/components/Headers/DesktopHeader/DesktopHeader.vue";
import MobileHeader from "@/components/Headers/MobileHeader/MobileHeader.vue";

import { IFilterOrderItem } from "@/models";

@Component({
  components: {
    "desktop-header": DesktopHeader,
    "mobile-header": MobileHeader,
  },
})
export default class VoicesHeader extends Vue {
  //STORE
  @State((state) => state.Voices.voiceCategoryList)
  categoryDropdownOptions!: string[];

  @Action
  private filterVoicesBySelectedCategory!: (selectedCategory: string) => void;

  @Action
  private orderVoicesBySelectedOrder!: (selectedOrder: string) => void;

  //DATA

  orderByDropDownOptions: IFilterOrderItem[] = [
    {
      label: "Ascendente",
      value: "asc",
    },
    {
      label: "Descendente",
      value: "desc",
    },
  ];

  //METHODS
  callFilterVoicesByOrder(selectedOption: string): void {
    this.orderVoicesBySelectedOrder(selectedOption);
  }

  callFilterVoicesByCategory(selectedOption: string): void {
    this.filterVoicesBySelectedCategory(selectedOption);
  }
}
</script>

<style scoped lang="scss" src="./VoicesHeader.scss" />
