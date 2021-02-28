<template>
  <div>
    <input
      type="text"
      class="search-input"
      @input="searchVoice()"
      v-model="searchText"
    />
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

  // METHODS
  searchVoice() {
    this.searchVoiceInVoices(this.searchText);
  }
}
</script>

<style scoped lang="scss" src="./Search.scss" />
