import { ROOM_ACTIONS } from "../actions/consts";
import { IRoom } from "../interface";
import { Action } from "../actions/actionType";

export const roomsReducer = (state: Array<IRoom> = [], action: Action) => {
  switch (action.type) {
    case `${ROOM_ACTIONS.GET_ROOM}`:
      return {
        ...state,
        data: [],
      };
    case `${ROOM_ACTIONS.GET_ROOM}_SUCCESS`:
      return {
        ...state,
        data: action.payload,
      };
    case `${ROOM_ACTIONS.GET_ROOM}_ERROR`:
      return {
        ...state,
        err: action.error,
      };
    default:
      return state;
  }
};
