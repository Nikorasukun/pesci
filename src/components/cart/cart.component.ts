import { Component, inject, signal } from '@angular/core';
// import {MatList, MatListItem} from '@angular/material/list'
// import { MatDivider } from '@angular/material/divider';
import { ServiziService } from '../../services/servizi.service';
import { MatTableModule } from '@angular/material/table';
import { Ordine, Pesce } from '../../classes/session';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [MatTableModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor() {}
  sessione = inject(ServiziService);
  displayedColumns: string[] = [
    'image',
    'nome',
    'acqua',
    'lunghezza',
    'quantita',
    'actions',
  ];
  dataSource = this.loadCart();

  removeFromCart(id: number): void {
    console.log(this.sessione.carrello());

    this.sessione.carrello().map((element) => {
      if (element.pesce?.id == id) {
        element.quantita--;
        return;
      }
    });
  }

  loadCart(): Ordine[] {
    let ret: Ordine[] = [];
    this.sessione.carrello().forEach((element) => {
      if (element.quantita > 0) {
        ret.push(element);
      }
    });
    return ret;
  }
}
