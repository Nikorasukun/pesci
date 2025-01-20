export class Sessione {
  catalogo: Pesce[] = [];
}

export class Pesce {
  id: number = 0;
  nome: String = '';
  acqua: String = '';
  colore: String = '';
  lunghezza: number = 0;
  immagine: String = '';
}

export class Ordine {
  pesce: Pesce | undefined = undefined;
  quantita: number = 0;

  constructor(p: Pesce, q: number) {
    this.pesce = p;
    this.quantita = q;
  }
}
