import * as RoomActions from './room.actions';
import { Room } from './room.model';

export type Action = RoomActions.All;

export function roomReducer(state: Room, action: Action){
  switch (action.type) {
    case RoomActions.GET_ROOM:
      return { ...state, loading: true};
    case RoomActions.GET_ROOM_SUCCESS:
      return { ...state, ...action.payload, loading: false};
    default:
      return state;
  }
}
