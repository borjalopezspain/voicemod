<template>
  <div class="voices-container">
    <div class="voices-title-container">
      <div class="voices-title-container__title ">{{ voicesListTitle }}</div>
      <div class="voices-title-container__separator">
        <div class="line"></div>
      </div>
    </div>
    <div class="voices-container__list">
      <voice-item v-for="voice in voices" :key="voice.id" :voice-data="voice" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IVoiceItem } from "@/models";
import VoiceItem from "@/components/VoiceItem/VoiceItem.vue";

@Component({
  components: {
    "voice-item": VoiceItem,
  },
})
export default class VoicesList extends Vue {
  @Prop({ required: true, type: Array }) voices!: IVoiceItem[];
  @Prop({ required: true, type: String }) voicesListTitle!: string;
}
</script>

<style scoped lang="scss" src="./VoicesList.scss" />
