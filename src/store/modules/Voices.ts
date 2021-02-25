import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import {
  SET_VOICES_LIST,
  SET_FAVOURITE_VOICES_LIST,
  SAVE_SELECTED_VOICE,
} from "@/store/mutationTypes/Voices";
import VoicesService from "@/services/implementations/VoicesService";
import IVoicesService from "@/services/interfaces/IVoicesService";
import { IVoiceItem } from "@/models";

@Module
export default class Voices extends VuexModule {
  voicesService: IVoicesService = new VoicesService();
  /* STATE */
  voicesList: IVoiceItem[] = [];
  favouriteVoicesList: IVoiceItem[] = [];
  filteredVoicesList: IVoiceItem[] = [];
  selectedVoice: IVoiceItem | unknown = {};

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

  @Action
  public setSelectedVoice(selectedVoice: IVoiceItem): void {
    this.context.commit(SAVE_SELECTED_VOICE, selectedVoice);
  }

  /* MUTATIONS */
  @Mutation
  public setVoicesList(value: IVoiceItem[]): void {
    this.filteredVoicesList = value;
    this.voicesList = value;
  }

  @Mutation
  public setFavouriteVoicesList(value: IVoiceItem[]): void {
    this.favouriteVoicesList = value;
  }

  @Mutation
  public saveSelectedVoice(value: IVoiceItem): void {
    this.selectedVoice = value;
  }
}
