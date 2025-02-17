import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chisiamo',
  imports: [],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css'
})
export class ChisiamoComponent implements OnInit {
  http = inject(HttpClient);
  clienti:any

  ngOnInit(): void {
    this.MostraClienti();
  }

  MostraClienti(){
    this.http.get("http://localhost:8089/api/clienti").subscribe(
      {
        next: clienti => {
          this.clienti = clienti; //do il risultato giusto
        },
        error: error => {
          console.error("error fetching data ", error)
        }
      }
    )
  }
}
