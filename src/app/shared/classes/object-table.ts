export interface tableDetail {
    numReferencia?: string;
    descripcion?: string;
    unidades?: string;
    precio?: string;
}
export class UserClass implements tableDetail {
    numReferencia: string;
    descripcion: string;
    unidades: string;
    precio: string;

    constructor(numReferencia?: string, descripcion?: string, unidades?: string, precio?: string) {
        this.numReferencia = numReferencia;
        this.descripcion = descripcion;
        this.unidades = unidades;
        this.precio = precio;
    }
}