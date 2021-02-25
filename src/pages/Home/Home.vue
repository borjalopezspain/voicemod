<template>
  <section class="main-container">
    <div class="section-title">
      <div class="section-title__title">FAVOURITE VOICES</div>
      <div class="section-title__separator"></div>
    </div>
    <div class="favs-container">
      <div
        class="voices-container__voice"
        v-for="voice in favouriteVoicesData"
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
        v-for="voice in filteredVoicesData"
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
import { IVoiceItem } from "@/models";

import VoiceItem from "@/components/VoiceItem/VoiceItem.vue";

@Component({
  components: {
    "voice-item": VoiceItem,
  },
})
export default class Home extends Vue {
  @Action
  private getVoicesList!: () => Promise<IVoiceItem[]>;

  @Action
  private getFavouriteVoicesList!: () => Promise<IVoiceItem[]>;

  @State((state) => state.Voices.favouriteVoicesList)
  favouriteVoicesList!: IVoiceItem[];

  @State((state) => state.Voices.filteredVoicesList)
  filteredVoicesList!: IVoiceItem[];

  // DATA
  voicesData: IVoiceItem[] = [];
  favouriteVoicesData: IVoiceItem[] = [];
  filteredVoicesData: IVoiceItem[] = [];

  // METHODS
  async callGetVoicesList(): Promise<void> {
    const res = await this.getVoicesList();
    this.voicesData = this.filteredVoicesList;
  }
  async callGetFavouriteVoicesList(): Promise<void> {
    const res = await this.getFavouriteVoicesList();
    if (res) {
      this.favouriteVoicesData = res;
    }
  }

  async mounted(): Promise<void> {
    await this.callGetVoicesList();
    await this.callGetFavouriteVoicesList();
  }
}
</script>

<style scoped lang="scss" src="./Home.scss" />
