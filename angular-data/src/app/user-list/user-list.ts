import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  names: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}
