<template>
  <div class="orderBy-list-container">
    <div class="orderBy-list-container__order-icon">
      <img src="../../../assets/filterIcons/order.svg" alt="order icon" />
    </div>
    <dropdown-component
      :drop-down-options="dropDownOptions"
      @callFilter="callFilterVoicesByOrder"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { IFilterOrderItem } from "@/models";
import Dropdown from "@/components/Drowdown/Dropdown.vue";

@Component({
  components: {
    "dropdown-component": Dropdown,
  },
})
export default class FilterOrderBy extends Vue {
  //STORE
  @Action
  private orderVoicesBySelectedOrder!: (selectedOrder: string) => void;

  //DATA
  dropDownOptions: IFilterOrderItem[] = [
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
  callFilterVoicesByOrder(selectedOrder: string): void {
    this.orderVoicesBySelectedOrder(selectedOrder);
  }
}
</script>

<style scoped lang="scss" src="./FilterOrderBy.scss" />
