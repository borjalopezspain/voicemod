import { AxiosPromise } from "axios";

export default interface IVoicesService {
  getVoicesList(): AxiosPromise<any>;
  getFavouriteVoicesList(): AxiosPromise<any>;
}
