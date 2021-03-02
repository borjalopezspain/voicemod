<template>
  <section id="main-layout">
    <div class="layout-container">
      <div
        class="layout-container__header"
        :class="fixHeader ? 'layout-container__header--fixed' : ''"
      >
        <voices-header />
      </div>
      <section class="layout-container__content">
        <router-view />
      </section>
      <div class="layout-container__footer">
        <main-footer />
      </div>
    </div>
    <back-to-top :show-back-to-top="showBackToTop" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footers/MainFooter/MainFooter.vue";
import BackToTop from "@/components/BackToTop/BackToTop.vue";
import VoicesHeader from "@/components/Headers/VoicesHeader/VoicesHeader.vue";

@Component({
  components: {
    "main-footer": Footer,
    "back-to-top": BackToTop,
    "voices-header": VoicesHeader,
  },
})
export default class MainLayout extends Vue {
  //DATA

  fixHeader: boolean = false;
  showBackToTop: boolean = false;
  headerJumpScroll: number = 50;
  backToTopJumpScroll: number = 200;

  //METHODS
  handleScrollHeader(): void {
    if (
      document.body.scrollTop > this.headerJumpScroll ||
      document.documentElement.scrollTop > this.headerJumpScroll
    ) {
      this.fixHeader = true;
    } else {
      this.fixHeader = false;
    }
  }
  handleScrollBackToTop(): void {
    if (
      document.body.scrollTop > this.backToTopJumpScroll ||
      document.documentElement.scrollTop > this.backToTopJumpScroll
    ) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }
  }

  mounted(): void {
    window.addEventListener("scroll", () => {
      this.handleScrollHeader();
      this.handleScrollBackToTop();
    });
  }

  destroyed(): void {
    window.addEventListener("scroll", () => {});
  }
}
</script>

<style scoped lang="scss" src="./MainLayout.scss" />
