<template>
  <div class="orderBy-list-container">
    <div class="orderBy-list-container__order-icon">
      <img src="../../../assets/filterIcons/order.svg" alt="order icon" />
    </div>
    <div
      class="orderBy-list-container__drowdown-btn"
      @click="showOrderByOptions = !showOrderByOptions"
    >
      {{ selectedOrder }}
      <transition name="slide">
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

@Component
export default class FilterOrderBy extends Vue {
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
}
</script>

<style scoped lang="scss" src="./FilterOrderBy.scss" />
