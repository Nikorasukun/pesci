import { Component, inject, signal } from '@angular/core';
// import {MatList, MatListItem} from '@angular/material/list'
// import { MatDivider } from '@angular/material/divider';
import { ServiziService } from '../../services/servizi.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  imports: [MatTableModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent {
  constructor() { }
  sessione = inject(ServiziService)
  displayedColumns: string[] = ['image', 'nome', 'acqua', 'lunghezza', 'actions'];
  dataSource = this.sessione.carrello();

  removeFromCart(id:number){
    //TODO --> fare questo metodo
  }
}
