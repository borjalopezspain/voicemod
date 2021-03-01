import { AxiosPromise } from "axios";
import { IVoiceItem, IVoiceServerResponse } from "@/models";

export default interface IVoicesService {
  getVoicesList(): AxiosPromise<IVoiceServerResponse[]>;
  getFavouriteVoicesList(): AxiosPromise<IVoiceServerResponse[]>;
  addVoiceToFavourites(
    favouriteVoice: IVoiceItem
  ): AxiosPromise<IVoiceServerResponse[]>;
  removeVoiceFromFavourites(
    favouriteVoiceId: string
  ): AxiosPromise<IVoiceServerResponse[]>;
}
