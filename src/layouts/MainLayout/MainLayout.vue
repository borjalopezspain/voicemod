<template>
  <section id="main-layout">
    <div class="layout-container">
      <div class="layout-container__header">
        <voices-header />
      </div>
      <section class="layout-container__content">
        <router-view />
      </section>
      <div class="layout-container__footer">
        <main-footer />
      </div>
    </div>
    <back-to-top />
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
export default class MainLayout extends Vue {}
</script>

<style scoped lang="scss" src="./MainLayout.scss" />
