<template>
  <section class="main-container">
    <div v-if="favouriteVoicesData.length > 0" class="favs-container">
      <div class="section-title">
        <div class="section-title__title">FAVOURITE VOICES</div>
        <div class="section-title__separator"><div class="line"></div></div>
      </div>
      <div class="voices-container">
        <voice-item
          v-for="voice in favouriteVoicesData"
          :key="voice.id"
          :voice-data="voice"
        />
      </div>
    </div>
    <div class="filtered-voices-container">
      <div class="section-title">
        <div class="section-title__title">PRO VOICES</div>
        <div class="section-title__separator"><div class="line"></div></div>
      </div>
      <div class="voices-container">
        <voice-item
          v-for="voice in filteredVoicesData"
          :key="voice.id"
          :voice-data="voice"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
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
  favouriteVoicesData: IVoiceItem[] = [];
  filteredVoicesData: IVoiceItem[] = [];

  // METHODS
  async callGetVoicesList(): Promise<void> {
    await this.getVoicesList();
    this.filteredVoicesData = this.filteredVoicesList;
  }
  async callGetFavouriteVoicesList(): Promise<void> {
    await this.getFavouriteVoicesList();
    this.favouriteVoicesData = this.favouriteVoicesList;
  }

  async mounted(): Promise<void> {
    await this.callGetVoicesList();
    await this.callGetFavouriteVoicesList();
  }
}
</script>

<style scoped lang="scss" src="./Home.scss" />
