import axios from "axios";
import { IReservation } from "../modules/room/interface";

export class HttpClient {
  baseUrl;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async get(url: string) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }

  async put(url: string, id: string, data: IReservation[]) {
    return await axios.put(`${this.baseUrl}/${url}/${id}`, {
      reservation: data,
    });
  }
}
