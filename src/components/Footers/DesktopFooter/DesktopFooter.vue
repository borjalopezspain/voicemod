<template>
  <footer class="footer-container">
    <div class="footer-container__copy">
      {{ copyText }} &copy; {{ copyYear }}
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DesktopFooter extends Vue {
  //DATA
  copyText: string = "Voicemod";
  copyYear: number = new Date().getFullYear();
}
</script>

<style scoped lang="scss" src="./DesktopFooter.scss" />
