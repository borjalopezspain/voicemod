import IVoicesService from "@/services/interfaces/IVoicesService";
import axios, { AxiosPromise } from "axios";

export default class VoicesService implements IVoicesService {
  public getVoicesList = (): AxiosPromise<any> =>
    axios.get(`${process.env.VUE_APP_DB_URL}/voices`);

  public getFavouriteVoicesList = (): AxiosPromise<any> =>
    axios.get(`${process.env.VUE_APP_DB_URL}/favourites`);
}
