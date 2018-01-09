import { Action } from '@ngrx/store';
import { Room } from './room.model';


export const GET_ROOMS = 'Rooms get'
export const GET_ROOMS_SUCCESS = 'Rooms get success';


export class GetRooms implements Action {
  readonly type = GET_ROOMS;
  constructor(public payload: string) {}
}

export class GetRoomsSuccess implements Action {
  readonly type = GET_ROOMS_SUCCESS;
  constructor(public payload: Room[]) {}
}

export type All
  = GetRooms
  | GetRoomsSuccess;


