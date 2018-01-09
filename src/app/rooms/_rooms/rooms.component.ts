import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Room } from './room.model';
import * as roomActions from './room.actions';

interface AppState {
  room: Room;
}
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  room$: Observable<Room>;
  constructor(private store: Store<AppState>) {
    this.room$ = this.store.select('room');
   }

   getRoom() {
     this.store.dispatch(new roomActions.GetRoom('/rooms/OeGnL0qz7GJiIWv1VVOj'));
   }

  ngOnInit() {
  }

}
