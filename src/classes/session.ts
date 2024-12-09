class Sessione {
    logged: boolean = false;

    catalogo: Pesce[] = [];
}

class Pesce {
    id: number = 0;
    nome: String = "";
    acqua: String = "";
    colore: String = "";
    lunghezza: number = 0;
    immagine: String = "";
}

class Ordine{
  // pesce: Pesce = null;
  quantità: number = 0;
}
