import IVoicesService from "@/services/interfaces/IVoicesService";
import { IVoiceItem, IVoiceServerResponse } from "@/models";
import axios, { AxiosPromise } from "axios";

export default class VoicesService implements IVoicesService {
  public getVoicesList = (): AxiosPromise<IVoiceServerResponse[]> =>
    axios.get(`${process.env.VUE_APP_DB_URL}/voices`);

  public getFavouriteVoicesList = (): AxiosPromise<IVoiceServerResponse[]> =>
    axios.get(`${process.env.VUE_APP_DB_URL}/favourites`);

  public addVoiceToFavourites = (
    favouriteVoice: IVoiceItem
  ): AxiosPromise<IVoiceServerResponse[]> =>
    axios.post(`${process.env.VUE_APP_DB_URL}/favourites`, favouriteVoice);

  public removeVoiceFromFavourites = (
    favouriteVoiceId: string
  ): AxiosPromise<IVoiceServerResponse[]> =>
    axios.delete(
      `${process.env.VUE_APP_DB_URL}/favourites/${favouriteVoiceId}`
    );
}
