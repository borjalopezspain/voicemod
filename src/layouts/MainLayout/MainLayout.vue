<template>
  <section id="main-layout">
    <div class="layout-container">
      <div class="layout-container__header">
        <desktop-header />
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
import DesktopFooter from "@/components/Footers/DesktopFooter/DesktopFooter.vue";

@Component({
  components: {
    "desktop-header": DesktopHeader,
    "desktop-footer": DesktopFooter,
  },
})
export default class MainLayout extends Vue {}
</script>

<style scoped lang="scss" src="./MainLayout.scss" />
