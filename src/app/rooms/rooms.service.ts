import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class RoomsService {


  private roomsCollection: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>;

  constructor(private afs: AngularFirestore) {
    this.roomsCollection = afs.collection<Room>('rooms');


    this.rooms = this.roomsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
          const data = a.payload.doc.data() as Room;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
    });
  }
}
