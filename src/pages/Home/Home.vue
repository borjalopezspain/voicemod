<template>
  <div>
    HELLO WORLD
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

@Component
export default class Home extends Vue {
  @Action
  private testAction!: () => Promise<
    { author: string; id: number; title: string }[]
  >;

  @State((state) => state.test.testState) testState!: {
    author: string;
    id: number;
    title: string;
  }[];

  async mounted(): Promise<void> {
    await this.testAction();
    console.log(this.testState[0].author);
  }
}
</script>
