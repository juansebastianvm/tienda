import { Injectable } from '@angular/core';
import {Fruta} from '../models/fruta.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  frutas: Fruta [] = [
    { id: 1, ventaMin: '1', ventaMax : '10',nombre: 'Manzana', descripcion: 'La manzana aporta estabilidad intestinal al cuerpo gracias a la cantidad de fibra que contiene, unos 5 gramos por pieza. De esta manera ayuda a prevenir enfermedades como la diverticulitis.     ', precio : 40 , unidad : 'Unidad', imagen: 'http://1.bp.blogspot.com/-0V5xiGGwhBc/VK0My5TjBTI/AAAAAAAADxY/cQjkOOq9uqM/s1600/manzana-roja.png' },
    { id: 2, ventaMin: '1', ventaMax : '20',nombre: 'Pera'   , descripcion: 'La pera tiene el poder de prevenir problemas cardiovasculares —como hipertensión, problemas de colesterol, inflamación y rigidez del tejido cardíaco—, gracias a su alto contenido en fibra.      ', precio : 35 , unidad : 'Unidad', imagen: 'https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg' },
    { id: 3, ventaMin: '2', ventaMax : '15',nombre: 'Banano' , descripcion: 'Contribuye a promover la buena circulación de la sangre. Actúa como protector de las úlceras del estómago y de la mucosa intestinal. Favorece el buen funcionamiento del sistema nervioso.        ', precio : 15 , unidad : 'Libra' , imagen: 'https://surtifruver.com/wp-content/uploads/2017/04/babano-criollo.jpg' },
    { id: 4, ventaMin: '1', ventaMax : '5' ,nombre: 'Naranja', descripcion: 'Como todas las frutas cítricas, la naranja es ácida, con un pH entre 3,1 y 4,1 según la madurez, tamaño y variedad de la pieza. Aunque esto no es, de media, tan fuerte como el limón.            ', precio : 10 , unidad : 'Unidad', imagen: 'https://superfresco.mx/wp-content/uploads/2020/10/Naranja-sin-semilla.png' },
    { id: 5, ventaMin: '1', ventaMax : '6' ,nombre: 'Kiwi'   , descripcion: 'El kiwi es una fruta con un alto contenido en agua y fibra, pero fundamentalmente destaca por su elevado contenido en vitamina C y E. Es poco calórico, unas 54 kcal por cada 100 gramos de fruta.', precio : 100, unidad : 'Unidad', imagen: 'https://www.lechepuleva.es/documents/13930/203222/kiwi_g.jpg' },
    { id: 6, ventaMin: '3', ventaMax : '30',nombre: 'Fresa'  , descripcion: 'La fresa tiene un alto contenido de fibra, vitamina C, antioxidantes, potasio, ácido fólico y minerales. Es una de las frutas con un número menor de calorías. Reduce problemas cardiovasculares. ', precio : 5  , unidad : 'Libra' , imagen: 'https://img.interempresas.net/fotos/1341264.jpeg' },
  ];

  frutasCombo: any =[{id: 0, fruta:  ""}, 
               {id: 1, fruta:  "Manzana"},
               {id: 2, fruta:  "Pera"},
               {id: 3, fruta:  "Banano"},
               {id: 4, fruta:  "Naranja"},
               {id: 5, fruta:  "Kiwi"},
               {id: 6, fruta:  "Fresa"}];

  constructor() { }
}
