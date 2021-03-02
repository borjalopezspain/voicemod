<template>
  <div @click="setSelectedRandom" class="random-container">
    <img src="@/assets/filterIcons/button-random.svg" alt="random icon" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { IVoiceItem } from "@/models";

@Component
export default class FilterRandom extends Vue {
  //STORE
  @Action
  private setSelectedRandomVoice!: () => void;

  @State((state) => state.Voices.selectedVoice)
  selectedVoice!: IVoiceItem;

  //METHODS
  setSelectedRandom(): void {
    this.setSelectedRandomVoice();
    const element = document.getElementById(this.selectedVoice.id);
    if (element)
      element.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
</script>

<style scoped lang="scss" src="./FilterRandom.scss" />
