import type { Bebida } from "./bebida.interface";

export class CafeEspresso implements Bebida {
  obtenerDescripcion(): string {
    return "Café espresso";
  }

  obtenerPrecio(): number {
    return 12;
  }
}
