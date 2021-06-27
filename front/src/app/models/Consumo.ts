export class Consumo {
    _id?: number;
    fecha: Date;
    hora: number;
    consumo: number;
    precioKwh: number;
    costeHora: number;

    constructor(fecha: Date, hora: number, consumo: number, precioKwh: number, costeHora: number) {
        this.fecha = fecha;
        this.hora = hora;
        this.consumo = consumo;
        this.precioKwh = precioKwh;
        this.costeHora = costeHora;

    }

}