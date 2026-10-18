import type { TarjetaLealtad } from "./tarjeta-lealtad.interface";

export class TarjetaLealtadInexistente implements TarjetaLealtad {
  obtenerNombreDelTitular(): string {
    return "Cliente sin tarjeta";
  }

  calcularDescuento(): number {
    return 0;
  }

  acumularPuntos(): void {}

  obtenerPuntos(): number {
    return 0;
  }
}
