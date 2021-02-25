import { AxiosPromise } from "axios";

export default interface ITestService {
  test(): AxiosPromise<any>;
}
