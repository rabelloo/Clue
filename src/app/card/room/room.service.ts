import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Room } from './room';
import { rooms } from './rooms';

@Injectable()
export class RoomService {

  constructor() { }

  get(): Observable<Room[]> {
    return of(rooms);
  }

}
