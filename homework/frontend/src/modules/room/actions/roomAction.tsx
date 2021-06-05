import { ROOM_ACTIONS } from "./consts";
import { roomsService } from "../service";
import { Dispatch } from "redux";
import { IReservation } from "../interface";

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

export const addReservation =
  (id: string, newReservation: IReservation, oldData: IReservation[]) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await roomsService.addReservation(
        id,
        oldData,
        newReservation
      );
      console.log(res);

      dispatch({
        type: ROOM_ACTIONS.ADD_RESERVATION_ROOM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
