import { IRoom } from "../interface";
import { ROOM_ACTIONS } from "./consts";

interface GET_ROOM {
  type: ROOM_ACTIONS.GET_ROOM;
  payload: IRoom;
  error: null;
}

export type Action = GET_ROOM;
