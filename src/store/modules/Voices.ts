import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import {
  SET_VOICES_LIST,
  SET_FAVOURITE_VOICES_LIST,
} from "@/store/mutationTypes/Voices";
import VoicesService from "@/services/implementations/VoicesService";
import IVoicesService from "@/services/interfaces/IVoicesService";
import { IVoiceItem } from "@/models";

@Module
export default class Test extends VuexModule {
  voicesService: IVoicesService = new VoicesService();
  /* STATE */
  voicesList: IVoiceItem[] = [];
  favouriteVoicesList: IVoiceItem[] = [];
  filteredVoices: IVoiceItem[] = [];

  /* ACTIONS */
  @Action
  public async getVoicesList(): Promise<void> {
    try {
      const response = await this.voicesService.getVoicesList();
      this.context.commit(SET_VOICES_LIST, response.data);
    } catch (error) {
      console.log(error);
    }
  }

  @Action
  public async getFavouriteVoicesList(): Promise<void> {
    try {
      const response = await this.voicesService.getFavouriteVoicesList();

      this.context.commit(SET_FAVOURITE_VOICES_LIST, response.data);
    } catch (error) {
      console.log(error);
    }
  }

  /* MUTATIONS */
  @Mutation
  public setVoicesList(value: IVoiceItem[]): void {
    this.voicesList = value;
    this.filteredVoices = value;
  }

  @Mutation
  public setFavouriteVoicesList(value: IVoiceItem[]): void {
    this.favouriteVoicesList = value;
  }
}
