import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserItem } from './user-item/user-item';

@Component({
  selector: 'app-root',
  imports: [HelloWorld, UserItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-data');
}
