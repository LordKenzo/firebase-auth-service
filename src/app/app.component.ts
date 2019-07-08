import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'lf-root',
  template: `
    <div *ngIf="user.uid | async as uid">
      The user is logged in {{ uid }}
      <div *ngIf="user.isAdmin | async">The user also has ADMIN power</div>
      <div><button>Logout</button></div>
    </div>
    <ng-template #login>
      You need to login: <button>Login</button>
    </ng-template>
  `,
  styles: [],
})
export class AppComponent {
  title = 'firebase-auth-service';

  constructor(private user: UserService) {}
}
