import { Component, OnInit } from '@angular/core';
import { UserItem } from '../user-item/user-item';

@Component({
  selector: 'app-user-list',
  imports: [UserItem],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  // names: string[] dichiara un vettore (array) che contiene solo stringhe.
  names: string[];

  constructor() {
    // Riempiamo il vettore nel costruttore con alcuni nomi iniziali.
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit(): void {}
}
