<template>
  <div
    class="voice-item"
    @click="selectVoice()"
    :class="selectedVoice.id === voiceData.id ? 'selected' : ''"
    :id="voiceData.id"
  >
    <div class="voice-item__container">
      <div class="voice-item__icon">
        <img
          :src="require(`../../assets/voiceIcons/${voiceData.icon}`)"
          :alt="voiceData.name"
        />
        <div class="voice-item__heart" @click.stop="manageVoiceToFavourites()">
          <div class="voice-item__heart__icon-container">
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
      </div>
      <div class="voice-item__label">{{ voiceData.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { findIndex, find } from "lodash";
import { IVoiceItem, IManageFavouritesItem } from "@/models";

@Component
export default class VoiceItem extends Vue {
  @Prop({ required: true, type: Object }) voiceData!: IVoiceItem;

  //STORE
  @State((state) => state.Voices.selectedVoice)
  selectedVoice!: IVoiceItem;

  @State((state) => state.Voices.favouriteVoicesList)
  favouriteVoicesList!: IVoiceItem[];

  @Action
  private setSelectedVoice!: (selectedVoice: IVoiceItem | {}) => void;

  @Action
  private addVoiceToFavouriteList!: (payload: IManageFavouritesItem) => void;

  @Action
  private removeVoiceFromFavouriteList!: (
    payload: IManageFavouritesItem
  ) => void;

  // METHODS
  selectVoice(): void {
    let setSelected: IVoiceItem | {};
    if (this.selectedVoice.id === this.voiceData.id) {
      setSelected = {};
    } else {
      setSelected = this.voiceData;
    }
    this.setSelectedVoice(setSelected);
  }

  manageVoiceToFavourites(): void {
    const isInFavsIndex = findIndex(
      this.favouriteVoicesList,
      (favVoice) => favVoice.id === this.voiceData.id
    );

    const payload: IManageFavouritesItem = {
      voiceFavsItem: this.voiceData,
      voiceFavsIndex: isInFavsIndex,
    };

    if (isInFavsIndex === -1) {
      this.addVoiceToFavouriteList(payload);
    } else {
      this.removeVoiceFromFavouriteList(payload);
    }
  }

  isVoiceInFavourites(): boolean {
    const found = find(
      this.favouriteVoicesList,
      (voice) => voice.id === this.voiceData.id
    );

    if (found) {
      return true;
    }

    return false;
  }
}
</script>

<style scoped lang="scss" src="./VoiceItem.scss" />
