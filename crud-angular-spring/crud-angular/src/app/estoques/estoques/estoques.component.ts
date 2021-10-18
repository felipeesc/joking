import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import {Estoque} from "../model/estoque";
import {EstoqueService} from "../services/estoque.service";



@Component({
  selector: 'app-estoques',
  templateUrl: './estoques.component.html',
  styleUrls: ['./estoques.component.scss']
})
export class EstoquesComponent implements OnInit {

  estoques$: Observable<Estoque[]>;

  estoques: Estoque[] = [
    {_id: 1, nome: 'Heineken', categoria: 'Cerveja', fornecedor: 'ambev', acoes: ''}
  ];
  displayedColumns = ['nome', 'categoria', 'fornecedor', 'getdetails'];

  constructor(
    private estoqueService: EstoqueService,
    public dialog: MatDialog
  ) {
    this.estoques$ = this.estoqueService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar estoques.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  getRecord(name: string)
  {
    alert(name);
  }

  ngOnInit(): void {

  }

}
