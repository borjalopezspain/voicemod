<template>
  <section class="main-container">
    <div v-if="favs.length > 0" class="favs-container">
      <div class="section-title">
        <div class="section-title__title">{{ favsTitle }}</div>
        <div class="section-title__separator"><div class="line"></div></div>
      </div>
      <div class="voices-container">
        <voice-item v-for="voice in favs" :key="voice.id" :voice-data="voice" />
      </div>
    </div>
    <div class="filtered-voices-container" v-if="filteredVoicesList.length > 0">
      <div class="section-title">
        <div class="section-title__title">{{ proTitle }}</div>
        <div class="section-title__separator"><div class="line"></div></div>
      </div>
      <div class="voices-container">
        <voice-item
          v-for="voice in filteredVoicesList"
          :key="voice.id"
          :voice-data="voice"
        />
      </div>
    </div>
    <div
      v-else-if="filteredVoicesList.length === 0 && isDataLoaded"
      class="no-voices"
    >
      <div class="no-voices__text">
        {{ noVoicesMsg }}
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
  //STORE
  @Action
  private getVoicesList!: () => Promise<IVoiceItem[]>;

  @Action
  private getFavouriteVoicesList!: () => Promise<IVoiceItem[]>;

  @State((state) => state.Voices.favouriteVoicesList) favs!: IVoiceItem[];

  @State((state) => state.Voices.filteredVoicesList)
  filteredVoicesList!: IVoiceItem[];

  //DATA
  favsTitle: string = "FAVOURITE VOICES";
  proTitle: string = "PRO VOICES";
  noVoicesMsg: string = "NO VOICES FOUND";
  isDataLoaded: boolean = false;

  // METHODS
  async callGetVoicesList(): Promise<void> {
    await this.getVoicesList();
  }
  async callGetFavouriteVoicesList(): Promise<void> {
    await this.getFavouriteVoicesList();
  }

  async mounted(): Promise<void> {
    await this.callGetVoicesList();
    await this.callGetFavouriteVoicesList();
    this.isDataLoaded = true;
  }
}
</script>

<style scoped lang="scss" src="./Home.scss" />
