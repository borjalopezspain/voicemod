<template>
  <div
    v-if="selectedVoice.id"
    class="selected-voice-container"
    @click="goToSelectedVoice()"
  >
    <div class="selected-voice-container__icon">
      <img
        :src="require(`../../assets/voiceIcons/${selectedVoice.icon}`)"
        :alt="selectedVoice.name"
      />
    </div>
    <div class="selected-voice-container__name">
      {{ selectedVoice.name }}
    </div>
    <div
      @click.stop="manageVoiceToFavourites()"
      class="selected-voice-container__favourite"
      :class="
        isVoiceInFavourites()
          ? 'selected-voice-container__favourite--is-in-favs'
          : ''
      "
    >
      <img
        v-if="isVoiceInFavourites()"
        src="../../assets/favIcons/voice-favourite.svg"
        alt="fav-on"
      />
      <img
        v-else
        src="../../assets/favIcons/voice-favourite-off.svg"
        alt="fav-off"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { IVoiceItem, IManageFavouritesItem } from "@/models";
import { find, findIndex } from "lodash";

@Component
export default class SelectedVoice extends Vue {
  //STORE
  @State((state) => state.Voices.selectedVoice)
  selectedVoice!: IVoiceItem;

  @State((state) => state.Voices.favouriteVoicesList)
  favouriteVoicesList!: IVoiceItem[];

  @Action
  private addVoiceToFavouriteList!: (payload: IManageFavouritesItem) => void;

  @Action
  private removeVoiceFromFavouriteList!: (
    payload: IManageFavouritesItem
  ) => void;

  //METHODS
  goToSelectedVoice(): void {
    const element = document.getElementById(this.selectedVoice.id);
    if (element)
      element.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  isVoiceInFavourites(): boolean {
    const found = find(
      this.favouriteVoicesList,
      (voice) => voice.id === this.selectedVoice.id
    );

    if (found) {
      return true;
    }

    return false;
  }

  manageVoiceToFavourites(): void {
    const isInFavsIndex = findIndex(
      this.favouriteVoicesList,
      (favVoice) => favVoice.id === this.selectedVoice.id
    );

    const payload: IManageFavouritesItem = {
      voiceFavsItem: this.selectedVoice,
      voiceFavsIndex: isInFavsIndex,
    };

    if (isInFavsIndex === -1) {
      this.addVoiceToFavouriteList(payload);
    } else {
      this.removeVoiceFromFavouriteList(payload);
    }
  }
}
</script>

<style scoped lang="scss" src="./SelectedVoice.scss" />
