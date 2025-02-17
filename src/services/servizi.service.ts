import { Injectable, signal, inject, OnInit } from '@angular/core';
import { Ordine, Sessione, Pesce } from '../classes/session';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ServiziService {
  constructor() {
    console.log('entered in ngOnInit by constructor')
  }

  http = inject(HttpClient);

  FillCatalog(){
    let listaPesci:Pesce[] = [];
    this.http.get("http://localhost:8089/api/pesci").subscribe(
      {
        next: pesce => {
          listaPesci = JSON.stringify(pesce) as unknown as Pesce[]; //do il risultato giusto
          console.log(`${listaPesci}`)
        },
        error: error => {
          console.error("error fetching data ", error)
        }
      }
    )
    this.sessione.catalogo = listaPesci;
    return listaPesci;
  }

  //secondo me il problema è che sessione.catalogo è in realtà una lista
  //di Ordine, o almeno viene considerato così.
  //invece io ho creato un metodo che lo rende una lista di Pesci
  //se potessi sistemare il metodo per far sì che torni una lista di
  //ordini anziché una lista di pesci, accompagnando quindi quello che
  //già ho della lista pesci, una quantità.
  //in tal modo forse potrebbe tutto funzionare come dovrebbe.
  //non posso cambiare il tipo di catalogo perché dovrei cambiare anche
  //tutte le volte che lo istanzio e che vado comunque a leggere i dati
  //da esso e sembra più impegnativo.

  isLogged = signal<Boolean>(false);
  cartLenght = signal<number>(0);
  sessione: Sessione = {
    catalogo: this.FillCatalog(),
  };
  carrello = signal<Ordine[]>(
    this.sessione.catalogo.map((pesce) => new Ordine(pesce, 0))
  );
}
