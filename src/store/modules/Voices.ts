import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import {
  SET_VOICES_LIST,
  SET_FAVOURITE_VOICES_LIST,
  SAVE_SELECTED_VOICE,
  SAVE_VOICE_IN_FAVOURITE_LIST,
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
      if (response.status === 200) {
        this.context.commit(SET_VOICES_LIST, response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Action
  public async getFavouriteVoicesList(): Promise<void> {
    try {
      const response = await this.voicesService.getFavouriteVoicesList();
      if (response.status === 200) {
        this.context.commit(SET_FAVOURITE_VOICES_LIST, response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Action
  public setSelectedVoice(selectedVoice: IVoiceItem): void {
    this.context.commit(SAVE_SELECTED_VOICE, selectedVoice);
  }

  @Action
  public async addVoiceToFavouriteList(
    favouriteVoice: IVoicesService
  ): Promise<void> {
    try {
      const response = await this.voicesService.addVoiceToFavourites(
        favouriteVoice
      );
      if (response.status === 200) {
        this.context.commit(SAVE_VOICE_IN_FAVOURITE_LIST, favouriteVoice);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /* MUTATIONS */
  @Mutation
  public setVoicesList(voicesList: IVoiceItem[]): void {
    this.filteredVoicesList = voicesList;
    this.voicesList = voicesList;
  }

  @Mutation
  public setFavouriteVoicesList(favouriteVoicesList: IVoiceItem[]): void {
    this.favouriteVoicesList = favouriteVoicesList;
  }

  @Mutation
  public saveSelectedVoice(selectedVoice: IVoiceItem): void {
    this.selectedVoice = selectedVoice;
  }

  @Mutation
  public saveVoiceInFavouriteList(value: IVoiceItem): void {
    this.favouriteVoicesList = [...this.favouriteVoicesList, value];
  }
}
