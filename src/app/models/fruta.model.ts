export class Fruta {
    id: number;
    ventaMin: string;
    ventaMax: string;
    nombre: string;
    descripcion: string;
    precio: number;
    unidad: string;
    imagen: string;

    constructor(id: number, ventaMin: string, ventaMax: string, nombre: string, descripcion: string, precio: number, unidad: string, imagen: string) {
        this.id = id, this.ventaMin = ventaMin, this.ventaMax = ventaMax, this.nombre = nombre, this.descripcion = descripcion, this.precio = precio, this.unidad = unidad, this.imagen = imagen
    }

}