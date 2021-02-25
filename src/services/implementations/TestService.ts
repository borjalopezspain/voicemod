import ITestService from "@/services/interfaces/ITestService";
import axios, { AxiosPromise } from "axios";

export default class TestService implements ITestService {
  public test(): AxiosPromise<any> {
    const res = axios.get(`${process.env.VUE_APP_DB_URL}/posts`);
    return res;
  }
}
