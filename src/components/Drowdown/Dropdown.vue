<template>
  <div class="dropdown-container">
    <div
      class="dropdown-container__drowdown-btn"
      @click="showDrowdown = !showDrowdown"
      v-click-outside="hideOptions"
    >
      {{ selectedItem }}
      <transition name="openDropdown">
        <ul class="dropdown-container__drowdown" v-if="showDrowdown">
          <li
            v-for="option in dropDownOptions"
            :key="option.value"
            class="dropdown-container__option"
            @click="filterVoices(option)"
          >
            {{ option.label }}
          </li>
        </ul>
      </transition>
      <span
        class="dropdown-container__icon"
        :class="showDrowdown ? 'dropdown-container__icon--open' : ''"
      >
        <img
          src="../../assets/filterIcons/select-arrow.svg"
          alt="select arrow"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IFilterOrderItem } from "@/models";
import ClickOutside from "vue-click-outside";

@Component({
  directives: {
    ClickOutside,
  },
})
export default class Dropdown extends Vue {
  @Prop({ required: true, type: Array }) dropDownOptions!: IFilterOrderItem[];
  //DATA
  selectedItem: string = "";
  showDrowdown: boolean = false;

  //METHODS
  filterVoices(selectedItem: IFilterOrderItem): void {
    this.selectedItem = selectedItem.label;
    this.$emit("callFilter", selectedItem.value);
  }

  hideOptions(): void {
    this.showDrowdown = false;
  }
}
</script>

<style scoped lang="scss" src="./Dropdown.scss" />
