<template>
  <div
    class="voice-item"
    :class="isItemSelected ? 'selected' : ''"
    @click="selectVoice()"
  >
    <div class="voice-item__container">
      <div class="voice-item__icon">
        <img
          :src="require(`../../assets/voiceIcons/${voiceData.icon}`)"
          :alt="voiceData.name"
        />
        <div class="voice-item__heart">
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
import { Action } from "vuex-class";
import { IVoiceItem } from "@/models";

@Component
export default class VoiceItem extends Vue {
  @Prop({ required: true, type: Object }) voiceData!: IVoiceItem;

  @Action
  private setSelectedVoice!: (selectedVoice: IVoiceItem) => void;

  // METHODS
  selectVoice(): void {
    this.setSelectedVoice(this.voiceData);
  }
}
</script>

<style scoped lang="scss" src="./VoiceItem.scss" />
