<template>
  <div class="filter-container">
    <div class="filter-container__icon">
      <img
        :src="require(`../../../assets/filterIcons/${filterIconName}.svg`)"
        alt="filter icon"
      />
    </div>
    <dropdown-component
      :drop-down-options="dropDownOptions"
      @callFilter="callFilterAction"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IFilterOrderItem } from "@/models";
import Dropdown from "@/components/Drowdown/Dropdown.vue";

@Component({
  components: {
    "dropdown-component": Dropdown,
  },
})
export default class FilterWithDropdown extends Vue {
  @Prop({ required: true, type: Array }) dropDownOptions!: IFilterOrderItem[];
  @Prop({ required: true, type: String }) filterIconName!: string;

  //METHODS
  callFilterAction(selectedItem: string): void {
    this.$emit("callFilterAction", selectedItem);
  }
}
</script>

<style scoped lang="scss" src="./FilterWithDropdown.scss" />
