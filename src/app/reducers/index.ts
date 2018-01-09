import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRoom from '../rooms/room.reducer';

export interface State {
  users: fromRoom.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromRoom.reducer
};

export const selectRoomState = createFeatureSelector<fromRoom.State>('rooms');

export const selectRoomIds = createSelector(selectRoomState, fromRoom.selectRoomIds);
export const selectRoomEntities = createSelector(selectRoomState, fromRoom.selectRoomEntities);
export const selectAllRooms = createSelector(selectRoomState, fromRoom.selectAllRooms);
export const selectRoomsotal = createSelector(selectRoomState, fromRoom.selectRoomTotal);
export const selectCurrentRoomId = createSelector(selectRoomState, fromRoom.getSelectedRoomId);

export const selectCurrentUser = createSelector(
  selectRoomEntities,
  selectCurrentRoomId,
  (roomEntities, roomId) => roomEntities[roomId]
);
