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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BackToTop extends Vue {
  //DATA
  showBackToTop: boolean = false;

  //METHODS
  scrollHandler() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }
  }

  goToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  mounted(): void {
    window.addEventListener("scroll", this.scrollHandler);
  }

  destroyed(): void {
    window.addEventListener("scroll", () => {});
  }
}
</script>

<style scoped lang="scss" src="./BackToTop.scss" />
