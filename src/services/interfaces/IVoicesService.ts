import { AxiosPromise } from "axios";
import { IVoiceItem } from "@/models";

export default interface IVoicesService {
  getVoicesList(): AxiosPromise<any>;
  getFavouriteVoicesList(): AxiosPromise<any>;
  addVoiceToFavourites(favouriteVoice: IVoiceItem): AxiosPromise<any>;
  removeVoiceFromFavourites(favouriteVoiceId: string): AxiosPromise<any>;
}
