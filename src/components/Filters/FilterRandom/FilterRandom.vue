<template>
  <div @click="setSelectedRandom" class="random-container">
    <img
      src="../../../assets/filterIcons/button-random.svg"
      alt="random icon"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class FilterRandom extends Vue {
  @Action
  private setSelectedRandomVoice!: () => void;

  //METHODS
  setSelectedRandom(): void {
    this.setSelectedRandomVoice();
  }
}
</script>

<style scoped lang="scss" src="./FilterRandom.scss" />
