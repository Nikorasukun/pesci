import { MatIconModule } from '@angular/material/icon';
import { Component, HostListener, inject, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ServiziService } from '../../services/servizi.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatIconModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  ngOnInit(): void {
    this.MostraPesci();
  }

  sessione = inject(ServiziService);

  colonne: number = 1;

  constructor(private router:Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols(event.target.innerWidth);
  }

  updateGridCols(width: number) {
    if (width < 600) {
      this.colonne = 1;
    } else if (width < 960) {
      this.colonne = 2;
    } else {
      this.colonne = 3;
    }
  }

  aggiungiAlCarrello(pesce: number): void {
    if(this.sessione.isLogged()){
      console.log(this.sessione.carrello());
      this.sessione.carrello().map((element) => {
        if(element.pesce?.id == pesce){
          element.quantita++
          this.sessione.cartLenght.set(this.sessione.cartLenght() + 1)
          console.log('pesce incrementato')
          return
        }
        else {console.log(`pesce saltato\nelement.pesce?.id: ${element.pesce?.id}\npesce: ${pesce}`)}
      })
      console.log(this.sessione.carrello)
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  http = inject(HttpClient);
  pesci:any

  MostraPesci(){
    this.http.get("http://localhost:8089/api/pesci").subscribe(
      {
        next: pesce => {
          this.pesci = pesce; //do il risultato giusto
        },
        error: error => {
          console.error("error fetching data ", error)
        }
      }
    )
  }
}
