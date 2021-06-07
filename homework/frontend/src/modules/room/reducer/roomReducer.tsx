import { ROOM_ACTIONS } from "../actions/consts";
import { IRoomState } from "../interface";
import { Action } from "../actions/actionType";

const initialState: IRoomState = {
  rooms: {
    data: [],
  },
};

export const roomsReducer = (state = initialState, action: Action) => {
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

    case ROOM_ACTIONS.ADD_RESERVATION_ROOM:
      return state.rooms.data.map((room) => {
        if (room.id === action.payload.id) {
          return {
            ...room,
            reservation: action.payload.reservation,
          };
        } else {
          return room;
        }
      });
    default:
      return state;
  }
};
