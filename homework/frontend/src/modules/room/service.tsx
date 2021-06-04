import { HttpClient } from "../../httpClient/index";

class RoomsService extends HttpClient {
  constructor() {
    super("https://60b2c58be0275c0017bfc74c.mockapi.io");
  }

  async getRooms() {
    return this.get("demo/v1/room");
  }

  async getReservation(id: string) {
    return this.get(`demo/v1/room/${id}`);
  }
}

export const roomsService = new RoomsService();
