import type { Bebida } from "./bebida.interface";

export class CafeAmericano implements Bebida {
  obtenerDescripcion(): string {
    return "Café americano";
  }

  obtenerPrecio(): number {
    return 15;
  }
}
