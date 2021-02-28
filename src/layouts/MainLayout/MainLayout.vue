<template>
  <section id="main-layout">
    <div class="layout-container">
      <div class="layout-container__header">
        <desktop-header v-if="pageWidth > 630" />
        <mobile-header v-else />
      </div>
      <div class="layout-container__content">
        <router-view />
      </div>
      <div class="layout-container__footer">
        <desktop-footer />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DesktopHeader from "@/components/Headers/DesktopHeader/DesktopHeader.vue";
import MobileHeader from "@/components/Headers/MobileHeader/MobileHeader.vue";
import DesktopFooter from "@/components/Footers/DesktopFooter/DesktopFooter.vue";

@Component({
  components: {
    "desktop-header": DesktopHeader,
    "desktop-footer": DesktopFooter,
    "mobile-header": MobileHeader,
  },
})
export default class MainLayout extends Vue {
  pageWidth: number = 0;

  mounted(): void {
    window.addEventListener("resize", () => {
      this.pageWidth = window.innerWidth;
    });
  }

  destroyed(): void {
    window.removeEventListener("resize", () => {});
  }
}
</script>

<style scoped lang="scss" src="./MainLayout.scss" />
