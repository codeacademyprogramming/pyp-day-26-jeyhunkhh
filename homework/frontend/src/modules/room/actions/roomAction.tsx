import { ROOM_ACTIONS } from "./consts";
import { roomsService } from "../service";
import { Dispatch } from "redux";

export function getRooms(dispatch: Dispatch) {
  dispatch({
    type: ROOM_ACTIONS.GET_ROOM,
  });
  roomsService
    .getRooms()
    .then((res) => {
      let { data } = res;
      dispatch({
        type: `${ROOM_ACTIONS.GET_ROOM}_SUCCESS`,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: `${ROOM_ACTIONS.GET_ROOM}_ERROR`,
        error: err,
      });
    });
}
