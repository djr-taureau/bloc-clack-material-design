import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Room } from './room.model';
import { RoomActions, RoomActionTypes } from '../rooms/room.actions';

export interface State extends EntityState<Room> {
  // additional entities state properties
  selectedRoomId: number | null;
}

export const adapter: EntityAdapter<Room> = createEntityAdapter<Room>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedRoomId: null
});

export function reducer(
  state = initialState,
  action: RoomActions
): State {
  switch (action.type) {
    case RoomActionTypes.ADD_ROOM: {
      return adapter.addOne(action.payload.Room, state);
    }

    case RoomActionTypes.ADD_ROOMS: {
      return adapter.addMany(action.payload.Rooms, state);
    }

    case RoomActionTypes.UPDATE_ROOM: {
      return adapter.updateOne(action.payload.Room, state);
    }

    case RoomActionTypes.UPDATE_ROOMS: {
      return adapter.updateMany(action.payload.Rooms, state);
    }

    case RoomActionTypes.DELETE_ROOM: {
      return adapter.removeOne(action.payload.id, state);
    }

    case RoomActionTypes.DELETE_ROOMS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case RoomActionTypes.LOAD_ROOMS: {
      return adapter.addAll(action.payload.Rooms, state);
    }

    case RoomActionTypes.CLEAR_ROOMS: {
      return adapter.removeAll({ ...state, selectedRoomId: null });
    }

    default: {
      return state;
    }
  }
}

export const getSelectedRoomId = (state: State) => state.selectedRoomId;

export const {
  // select the array of user ids
  selectIds: selectRoomIds,

  // select the dictionary of user entities
  selectEntities: selectRoomEntities,

  // select the array of users
  selectAll: selectAllRooms,

  // select the total user count
  selectTotal: selectRoomTotal
} = adapter.getSelectors();
