<template>
  <section class="main-container">
    <div class="section-title">
      <div class="section-title__title">FAVOURITE VOICES</div>
      <div class="section-title__separator"></div>
    </div>
    <div class="favs-container">
      <div
        class="voices-container__voice"
        v-for="voice in favouriteVoicesList"
        :key="voice.id"
      >
        <voice-item />
      </div>
    </div>
    <div class="section-title">
      <div class="section-title__title">PRO VOICES</div>
      <div class="section-title__separator"></div>
    </div>
    <div class="voices-container">
      <div
        class="voices-container__voice"
        v-for="voice in voicesList"
        :key="voice.id"
      >
        <voice-item />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

import VoiceItem from "@/components/VoiceItem/VoiceItem.vue";

@Component({
  components: {
    "voice-item": VoiceItem,
  },
})
export default class Home extends Vue {
  @Action
  private testAction!: () => Promise<
    { author: string; id: number; title: string }[]
  >;

  @State((state) => state.test.testState) testState!: {
    author: string;
    id: number;
    title: string;
  }[];

  async mounted(): Promise<void> {
    await this.testAction();
    console.log(this.testState[0].author);
  }
}
</script>

<style scoped lang="scss" src="./Home.scss" />
