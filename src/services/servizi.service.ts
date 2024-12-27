import { Injectable, signal } from '@angular/core';
import "../classes/session"

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor() { }
  carrello = signal<Pesce[]>([])
  isLogged = signal<Boolean>(false)
  sessione: Sessione = {

    catalogo: [
      {
        id: 0, nome: "Pesce mandarino", acqua: "salata", colore: "bianco,arancione",
        lunghezza: 0.30, immagine: "mandarino.webp"
      },
      {
        id: 1, nome: "Centropyge loricula", acqua: "salata", colore: "rosso",
        lunghezza: 0.20, immagine: "centropyge.webp"
      },
      {
        id: 2, nome: "Pesce pappagallo", acqua: "salata", colore: "bianco,rosa",
        lunghezza: 0.40, immagine: "pappagallo.webp"
      },
      {
        id: 3, nome: "Pesce Discus", acqua: "dolce", colore: "rosso, arancio, marrone",
        lunghezza: 0.30, immagine: "discus.jpg"
      },
      {
        id: 4, nome: "Pesce Killifish", acqua: "dolce", colore: "bianco,rosa",
        lunghezza: 0.40, immagine: "killifish.jpg"
      },
      {
        id: 5, nome: "Pesce Betta", acqua: "dolce", colore: "bianco,rosa",
        lunghezza: 0.30, immagine: "betta.jpg"
      },
    ]
  }
}
