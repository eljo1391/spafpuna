

export class ProductoModel {
    productoId: number;
    codigo: string;
    descripcion: string;
    costo: number;
    precioVenta: number;
    stockActual: number;
    imageName: string;
    estado: string;
    ventasDetalleCollection: any [];

    constructor() {

    }

}
