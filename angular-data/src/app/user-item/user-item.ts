import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
  name: string; // Dichiarazione della proprietà

  constructor() {
    // Inizializzazione della proprietà nel costruttore
    this.name = 'Felipe';
  }
}
