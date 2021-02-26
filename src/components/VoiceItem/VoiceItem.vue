<template>
  <div class="voice-item" @click="selectVoice()">
    <div class="voice-item__container">
      <div
        class="voice-item__icon"
        :class="selectedVoice.id === voiceData.id ? 'selected' : ''"
      >
        <img
          :src="require(`../../assets/voiceIcons/${voiceData.icon}`)"
          :alt="voiceData.name"
        />
        <div class="voice-item__heart" @click.stop="addVoiceToFavourites()">
          <div class="voice-item__heart__icon-container">
            <img src="../../assets/favIcons/voice-favourite-off.svg" alt="" />
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
import { IVoiceItem } from "@/models";

@Component
export default class VoiceItem extends Vue {
  @Prop({ required: true, type: Object }) voiceData!: IVoiceItem;

  @State((state) => state.Voices.selectedVoice)
  selectedVoice!: IVoiceItem[];

  @Action
  private setSelectedVoice!: (selectedVoice: IVoiceItem) => void;

  @Action
  private addVoiceToFavouriteList!: (favouriteVoice: IVoiceItem) => void;

  // METHODS
  selectVoice(): void {
    this.setSelectedVoice(this.voiceData);
  }

  addVoiceToFavourites(): void {
    this.addVoiceToFavouriteList(this.voiceData);
  }
}
</script>

<style scoped lang="scss" src="./VoiceItem.scss" />
