import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import voiceMutationTypes from "@/store/mutationTypes/Voices";
import VoicesService from "@/services/implementations/VoicesService";
import IVoicesService from "@/services/interfaces/IVoicesService";
import { IVoiceItem, IManageFavouritesItem } from "@/models";
import { filter, groupBy, map } from "lodash";

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
        this.context.commit(voiceMutationTypes.SET_VOICES_LIST, response.data);

        const groupedCategories = groupBy(response.data, "tags");
        const categoryesList = map(
          Object.keys(groupedCategories),
          (key) => key
        );
        console.log(categoryesList);
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
        this.context.commit(
          voiceMutationTypes.SET_FAVOURITE_VOICES_LIST,
          response.data
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Action
  public setSelectedVoice(selectedVoice: IVoiceItem): void {
    this.context.commit(voiceMutationTypes.SAVE_SELECTED_VOICE, selectedVoice);
  }

  @Action
  public async addVoiceToFavouriteList(
    payload: IManageFavouritesItem
  ): Promise<void> {
    try {
      const response = await this.voicesService.addVoiceToFavourites(
        payload.voiceFavsItem
      );
      if (response.status !== 500) {
        this.context.commit(
          voiceMutationTypes.SAVE_VOICE_IN_FAVOURITE_LIST,
          payload.voiceFavsItem
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Action
  public async removeVoiceFromFavouriteList(
    payload: IManageFavouritesItem
  ): Promise<void> {
    try {
      const response = await this.voicesService.removeVoiceFromFavourites(
        payload.voiceFavsItem.id
      );
      if (response.status !== 500) {
        this.context.commit(
          voiceMutationTypes.DELETE_VOICE_FROM_FAVOURITE_LIST,
          payload.voiceFavsIndex
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Action
  public searchVoiceInVoices(searchText: string): void {
    const filteredVoicesBySearch = filter(
      this.voicesList,
      (voice: IVoiceItem) => {
        const voiceLower = voice.name.toLocaleLowerCase();
        return voiceLower.includes(searchText.toLocaleLowerCase());
      }
    );
    this.context.commit(
      voiceMutationTypes.SEARCH_VOICE_IN_VOICE_LIST,
      filteredVoicesBySearch
    );
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
  public saveVoiceInFavouriteList(favouriteVoice: IVoiceItem): void {
    this.favouriteVoicesList.push(favouriteVoice);
  }

  @Mutation
  public deleteVoiceFromFavouriteList(favouriteVoiceIndex: number): void {
    this.favouriteVoicesList.splice(favouriteVoiceIndex, 1);
  }

  @Mutation
  public searchVoiceInVoiceList(filteredVoicesBySearch: IVoiceItem[]): void {
    this.filteredVoicesList = filteredVoicesBySearch;
  }
}
