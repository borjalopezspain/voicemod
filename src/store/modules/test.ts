import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import axios from "axios";
import { TEST } from "@/store/mutationTypes/Test";
import TestService from "@/services/implementations/TestService";
import ITestService from "@/services/interfaces/ITestService";

@Module
export default class Test extends VuexModule {
  testService: ITestService = new TestService();
  /* STATE */
  testState = {};

  /* ACTIONS */
  @Action
  public async testAction(): Promise<void> {
    try {
      const response = await this.testService.test();
      this.context.commit(TEST, response.data);
    } catch (error) {
      console.log(error);
    }
  }

  /* MUTATIONS */
  @Mutation
  public testMutation(
    value: { author: string; id: number; title: string }[]
  ): void {
    this.testState = value;
  }
}
