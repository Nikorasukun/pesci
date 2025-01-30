import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chisiamo',
  imports: [],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css'
})
export class ChisiamoComponent {
  http = inject(HttpClient);
  clienti:any

  MostraClienti(){
    this.http.get("http://localhost:8089/api/clienti").subscribe(
      {
        next: clienti => {
          console.log("ciao")
          this.clienti = clienti; //do il risultato giusto
        },
        error: error => {
          console.error("error fetching data ", error)
        }
      }
    )
  }
  

}
