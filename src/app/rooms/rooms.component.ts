import { Component, OnInit } from '@angular/core';
import { RoomsService } from './rooms.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from '../rooms/room.actions';
import * as fromRooms from '../rooms/room.reducer';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
