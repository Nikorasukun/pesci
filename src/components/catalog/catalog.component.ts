import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-catalog',
  imports: [MatButtonModule, MatCardModule, ServiziService],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  pesci = inject(ServiziService)
}
