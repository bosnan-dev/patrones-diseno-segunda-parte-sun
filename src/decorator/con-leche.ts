import { DecoradorBebida } from "./decorador-bebida";

export class ConLeche extends DecoradorBebida {
  override obtenerDescripcion(): string {
    return `${this.bebidaEnvuelta.obtenerDescripcion()}, con leche`;
  }

  override obtenerPrecio(): number {
    return this.bebidaEnvuelta.obtenerPrecio() + 4;
  }
}

