import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Input() valor: any = 0;

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  @Output() mudouValor = new EventEmitter();

  constructor() {
  }

}
