import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Fruta} from '../../models/fruta.model';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() objetoFruta: Fruta = new Fruta(0,'0','0','','',0,'','');
  @Output() valorSalida = new EventEmitter<any>();

  NumberA: number = 1;

  enviarValorAPadre(): void {
    this.valorSalida.emit({precio: this.objetoFruta.precio * this.NumberA, cantidad: this.NumberA});
    this.NumberA = 1;
  }

  constructor() {}

  ngOnInit(): void {
  }
}
