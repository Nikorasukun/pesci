import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor() { }

  sessione : Sessione = {
    logged : false,
  }
}
