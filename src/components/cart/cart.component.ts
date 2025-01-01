import { Component, inject, signal } from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list'
import { MatDivider } from '@angular/material/divider';
import { ServiziService } from '../../services/servizi.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatDivider, MatList, MatListItem],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor() {}
  sessione = inject(ServiziService)
}
