export class DetallePedido {
    id: number;
    id_fruta: number;
    cantidad: number;
    precio: number;
    fruta: string;
    unidad: string

    constructor(id: number, id_fruta: number, cantidad: number, precio: number, fruta: string, unidad: string) {
        this.id = id, this.id_fruta = id_fruta, this.cantidad = cantidad, this.precio = precio, this.fruta = fruta, this.unidad = unidad
    }
}