<template>
  <div
    :class="showBackToTop ? 'showButton' : ''"
    class="back-to-top-container"
    @click="goToTop()"
  >
    <div class="back-to-top-container__icon"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BackToTop extends Vue {
  @Prop({ required: true, type: Boolean }) showBackToTop!: boolean[];

  goToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
</script>

<style scoped lang="scss" src="./BackToTop.scss" />
