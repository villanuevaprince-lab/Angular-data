import { Component, signal } from '@angular/core';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-data');
}
