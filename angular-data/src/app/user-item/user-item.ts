import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem implements OnInit {
  // @Input trasforma questa proprieta in un canale di ricezione dal componente padre.
  // In strict mode inizializziamo con stringa vuota per evitare errori di proprieta non inizializzata.
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
