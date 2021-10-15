import {Component, OnInit} from '@angular/core';
import {Estoque} from "../model/estoque";


@Component({
  selector: 'app-estoques',
  templateUrl: './estoques.component.html',
  styleUrls: ['./estoques.component.scss']
})
export class EstoquesComponent implements OnInit {

  estoques: Estoque[] = [
    {_id: 1, nome: 'Heineken', categoria: 'Cerveja'}
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
