import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserItem } from './user-item/user-item';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [HelloWorld, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-data');
}
