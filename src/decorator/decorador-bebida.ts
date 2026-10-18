import type { Bebida } from "./bebida.interface";

export abstract class DecoradorBebida implements Bebida {
  protected readonly bebidaEnvuelta: Bebida;

  constructor(bebidaEnvuelta: Bebida) {
    this.bebidaEnvuelta = bebidaEnvuelta;
  }

  obtenerDescripcion(): string {
    return this.bebidaEnvuelta.obtenerDescripcion();
  }

  obtenerPrecio(): number {
    return this.bebidaEnvuelta.obtenerPrecio();
  }
}

