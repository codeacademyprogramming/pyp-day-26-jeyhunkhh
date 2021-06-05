import { IRoom } from "../interface";
import { ROOM_ACTIONS } from "./consts";

interface GET_ROOM {
  type: ROOM_ACTIONS.GET_ROOM;
  payload: IRoom;
  error: null;
}

interface ADD_RESERVATION_ROOM {
  type: ROOM_ACTIONS.ADD_RESERVATION_ROOM;
  payload: IRoom;
  error: null;
}

export type Action = GET_ROOM | ADD_RESERVATION_ROOM;
