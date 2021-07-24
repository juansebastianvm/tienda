import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Fruta} from '../../models/fruta.model';
import {DetallePedido} from '../../models/detallePedido.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  frutaSelect: number = 0;
  valorTotal: number = 0;

  idDetallePedido: number = 0;
  finalCompra: boolean = false;

  lista = this.dataService.frutasCombo;
  frutas = this.dataService.frutas;

  listaCompras: DetallePedido [] = [{id:0, id_fruta:0, cantidad:0, precio:0, fruta:'', unidad:''}];

  cantidad: number = 0;

  getFruta(fruta: number): Fruta {
    let resultado : Fruta = new Fruta(0,'0','0','','',0,'','');
    for (var i in this.frutas) {
      if (this.frutas[i].id == fruta) {
        resultado = this.frutas[i];
      }
    }
     return resultado;
  }

  agregarValor(nuevoValor: any): void {
    this.valorTotal = this.valorTotal + nuevoValor.precio;
    this.cantidad = nuevoValor.cantidad;
    this.listaCompras [this.idDetallePedido]= new DetallePedido(this.getIdDetallePedido(), this.getFruta(this.frutaSelect).id, nuevoValor.cantidad, nuevoValor.precio, this.getFruta(this.frutaSelect).nombre, this.getFruta(this.frutaSelect).unidad);
    this.frutaSelect = 0;
  }

  vaciarCanasta(): void {
    this.valorTotal = 0;
    this.frutaSelect = 0;
    this.idDetallePedido = 0;
    this.finalCompra = false;

    for (var i in this.listaCompras) {
      delete this.listaCompras[i];
    }
  }

  getIdDetallePedido(): number {
    this.idDetallePedido = this.idDetallePedido + 1;
    return this.idDetallePedido;
  }

  mostrarPedido(): void {
    this.finalCompra = true;
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

}
