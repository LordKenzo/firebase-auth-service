import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  uid = of(123);
  isAdmin = of(true);

  constructor() {}
}
