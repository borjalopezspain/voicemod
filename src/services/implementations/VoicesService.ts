import IVoicesService from "@/services/interfaces/IVoicesService";
import { IVoiceItem } from "@/models";
import axios, { AxiosPromise } from "axios";

export default class VoicesService implements IVoicesService {
  public getVoicesList = (): AxiosPromise<any> =>
    axios.get(`${process.env.VUE_APP_DB_URL}/voices`);

  public getFavouriteVoicesList = (): AxiosPromise<any> =>
    axios.get(`${process.env.VUE_APP_DB_URL}/favourites`);

  public addVoiceToFavourites = (
    favouriteVoice: IVoiceItem
  ): AxiosPromise<any> =>
    axios.post(`${process.env.VUE_APP_DB_URL}/favourites`, favouriteVoice);

  public removeVoiceFromFavourites = (
    favouriteVoiceId: string
  ): AxiosPromise<any> =>
    axios.delete(
      `${process.env.VUE_APP_DB_URL}/favourites/${favouriteVoiceId}`
    );
}
