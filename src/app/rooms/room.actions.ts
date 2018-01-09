import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity/src/models';
import { Room } from './room.model';

export enum RoomActionTypes {
  LOAD_ROOMS = '[Room] Load ROOMS',
  ADD_ROOM = '[Room] Add Room',
  ADD_ROOMS = '[Room] Add ROOMS',
  UPDATE_ROOM = '[Room] Update Room',
  UPDATE_ROOMS = '[Room] Update Rooms',
  DELETE_ROOM = '[Room] Delete Room',
  DELETE_ROOMS = '[Room] Delete Rooms',
  CLEAR_ROOMS = '[Room] Clear Rooms'
}

export class LoadRooms implements Action {
  readonly type = RoomActionTypes.LOAD_ROOMS;

  constructor(public payload: { Rooms: Room[] }) {}
}

export class AddRoom implements Action {
  readonly type = RoomActionTypes.ADD_ROOM;

  constructor(public payload: { Room: Room }) {}
}

export class AddRooms implements Action {
  readonly type = RoomActionTypes.ADD_ROOMS;

  constructor(public payload: { Rooms: Room[] }) {}
}

export class UpdateRoom implements Action {
  readonly type = RoomActionTypes.UPDATE_ROOM;

  constructor(public payload: { Room: Update<Room> }) {}
}

export class UpdateRooms implements Action {
  readonly type = RoomActionTypes.UPDATE_ROOMS;

  constructor(public payload: { Rooms: Update<Room>[] }) {}
}

export class DeleteRoom implements Action {
  readonly type = RoomActionTypes.DELETE_ROOM;

  constructor(public payload: { id: string }) {}
}

export class DeleteRooms implements Action {
  readonly type = RoomActionTypes.DELETE_ROOMS;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearRooms implements Action {
  readonly type = RoomActionTypes.CLEAR_ROOMS;
}

export type RoomActions =
 LoadRooms
 | AddRoom
 | AddRooms
 | UpdateRoom
 | UpdateRooms
 | DeleteRoom
 | DeleteRooms
 | ClearRooms;


