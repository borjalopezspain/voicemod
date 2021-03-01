<template>
  <div class="orderBy-list-container">
    <div class="orderBy-list-container__order-icon">
      <img src="../../../assets/filterIcons/order.svg" alt="order icon" />
    </div>
    <div
      class="orderBy-list-container__drowdown-btn"
      @click="showOrderByOptions = !showOrderByOptions"
      v-click-outside="hideOptions"
    >
      {{ selectedOrder }}
      <transition name="openDropdown">
        <ul class="orderBy-list-container__drowdown" v-if="showOrderByOptions">
          <li
            v-for="option in orderByOptions"
            :key="option.value"
            class="orderBy-list-container__option"
            @click="filterVoicesByOrder(option)"
          >
            {{ option.label }}
          </li>
        </ul>
      </transition>
      <span
        class="orderBy-list-container__icon"
        :class="showOrderByOptions ? 'orderBy-list-container__icon--open' : ''"
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
import { Action } from "vuex-class";
import { IFilterOrderItem } from "@/models";
import ClickOutside from "vue-click-outside";

@Component({
  directives: {
    ClickOutside,
  },
})
export default class FilterOrderBy extends Vue {
  //STORE
  @Action
  private orderVoicesBySelectedOrder!: (selectedOrder: string) => void;

  //DATA
  selectedOrder: string = "";
  showOrderByOptions: boolean = false;
  orderByOptions: IFilterOrderItem[] = [
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
  filterVoicesByOrder(selectedOrder: IFilterOrderItem): void {
    this.selectedOrder = selectedOrder.label;
    this.orderVoicesBySelectedOrder(selectedOrder.value);
  }

  hideOptions(): void {
    this.showOrderByOptions = false;
  }
}
</script>

<style scoped lang="scss" src="./FilterOrderBy.scss" />
