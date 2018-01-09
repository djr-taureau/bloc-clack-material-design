import { Room } from './room.model';
import 'rxjs/add/operator/map';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { catchError } from 'rxjs/operators/catchError';
import * as fromRoom from '../rooms/room.reducer';
import { RoomsService } from './rooms.service';
import * as actions from './room.actions';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';

@Injectable()
export class RoomsEffects {

  constructor(private actions$: Actions, private afs: AngularFirestore) { }

    getDataStateChanges(): Observable<DocumentChangeAction[]> {
      return this.afs.collection('rooms').stateChanges();
    }


      @Effect()
      getData$ = this.getDataStateChanges().pipe(
        mergeMap(actions => actions),
        map(action => {
          return {
            type: `[FirstData] ${action.type}`,
            payload: {
              id: action.payload.doc.id,
              ...action.payload.doc.data()
            }
          };
        })
      );

}
