import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estoque} from "../model/estoque";
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private readonly API = '/assets/estoques.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Estoque[]>(this.API)
      .pipe(
        first(),
        tap(estoques => console.log(estoques))
      );
  }
}
