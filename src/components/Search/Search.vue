<template>
  <div class="search-container">
    <input
      type="text"
      class="search-container__input"
      @input="searchVoice()"
      v-model="searchText"
      :placeholder="placeholder"
    />
    <div
      v-if="searchText !== ''"
      class="search-container__clear-icon"
      @click="
        searchText = '';
        searchVoice();
      "
    >
      <img src="../../assets/filterIcons/search-close.svg" alt="clear search" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Search extends Vue {
  @Action
  private searchVoiceInVoices!: (searchText: string) => void;

  //DATA
  searchText: string = "";
  placeholder: string = "Type something";

  // METHODS
  searchVoice() {
    this.searchVoiceInVoices(this.searchText);
  }
}
</script>

<style scoped lang="scss" src="./Search.scss" />
