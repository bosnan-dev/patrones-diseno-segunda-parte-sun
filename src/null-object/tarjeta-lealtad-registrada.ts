import type { TarjetaLealtad } from "./tarjeta-lealtad.interface";

export class TarjetaLealtadRegistrada implements TarjetaLealtad {
  private readonly nombreDelTitular: string;
  private readonly porcentajeDeDescuento: number;
  private puntosAcumulados: number;

  constructor(nombreDelTitular: string, porcentajeDeDescuento: number, puntosIniciales: number) {
    this.nombreDelTitular = nombreDelTitular;
    this.porcentajeDeDescuento = porcentajeDeDescuento;
    this.puntosAcumulados = puntosIniciales;
  }

  obtenerNombreDelTitular(): string {
    return this.nombreDelTitular;
  }

  calcularDescuento(montoTotal: number): number {
    return montoTotal * this.porcentajeDeDescuento;
  }

  acumularPuntos(montoPagado: number): void {
    this.puntosAcumulados += Math.floor(montoPagado / 10);
  }

  obtenerPuntos(): number {
    return this.puntosAcumulados;
  }
}
